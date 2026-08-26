import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ArtworkItem } from "../content/types";

const ease = [0.25, 0.1, 0.25, 1] as const;

/**
 * `custom` is threaded through AnimatePresence so the *outgoing* image knows
 * which way the viewer just travelled, not which way it arrived.
 */
type SlideCustom = { direction: number; offset: number };

const slideVariants: Variants = {
  enter: ({ direction, offset }: SlideCustom) => ({
    opacity: 0,
    x: direction >= 0 ? offset : -offset,
  }),
  center: { opacity: 1, x: 0 },
  exit: ({ direction, offset }: SlideCustom) => ({
    opacity: 0,
    x: direction >= 0 ? -offset : offset,
  }),
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

type ArtworkLightboxProps = {
  artworks: ArtworkItem[];
  /** Index of the artwork on show, or `null` when the lightbox is closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export function ArtworkLightbox({
  artworks,
  index,
  onIndexChange,
  onClose,
}: ArtworkLightboxProps) {
  const isOpen = index !== null && artworks.length > 0;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <LightboxDialog
          artworks={artworks}
          index={Math.min(Math.max(index, 0), artworks.length - 1)}
          onIndexChange={onIndexChange}
          onClose={onClose}
        />
      )}
    </AnimatePresence>,
    document.body,
  );
}

type LightboxDialogProps = {
  artworks: ArtworkItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

function LightboxDialog({
  artworks,
  index,
  onIndexChange,
  onClose,
}: LightboxDialogProps) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [direction, setDirection] = useState(0);

  const artwork = artworks[index];
  const total = artworks.length;
  const hasSiblings = total > 1;

  const select = useCallback(
    (nextIndex: number, nextDirection: number) => {
      if (nextIndex === index) return;
      setDirection(nextDirection);
      onIndexChange(nextIndex);
    },
    [index, onIndexChange],
  );

  const goNext = useCallback(() => {
    if (!hasSiblings) return;
    select((index + 1) % total, 1);
  }, [hasSiblings, index, select, total]);

  const goPrev = useCallback(() => {
    if (!hasSiblings) return;
    select((index - 1 + total) % total, -1);
  }, [hasSiblings, index, select, total]);

  // Lock page scrolling while open. The scroll container is <html> because the
  // base stylesheet sets `overflow-x: clip` there, which stops body overflow
  // from propagating to the viewport.
  useEffect(() => {
    const root = document.documentElement;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const previousOverflow = root.style.overflow;
    const previousPaddingRight = root.style.paddingRight;

    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      root.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPaddingRight;
    };
  }, []);

  // Move focus into the dialog, and hand it back to the trigger on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => previouslyFocused?.focus?.({ preventScroll: true });
  }, []);

  // Keyboard: arrows to browse, Home/End to jump, Escape to close, Tab trapped.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          return;
        case "ArrowRight":
          event.preventDefault();
          goNext();
          return;
        case "ArrowLeft":
          event.preventDefault();
          goPrev();
          return;
        case "Home":
          event.preventDefault();
          select(0, -1);
          return;
        case "End":
          event.preventDefault();
          select(total - 1, 1);
          return;
        case "Tab": {
          const dialog = dialogRef.current;
          if (!dialog) return;

          const focusable = Array.from(
            dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
          ).filter((element) => element.offsetParent !== null);
          if (focusable.length === 0) return;

          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          const active = document.activeElement;

          if (event.shiftKey && (active === first || !dialog.contains(active))) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, onClose, select, total]);

  // Warm up the neighbours so arrow-key browsing feels instant.
  useEffect(() => {
    if (!hasSiblings) return;

    for (const offset of [1, -1]) {
      const neighbour = artworks[(index + offset + total) % total];
      const preloader = new Image();
      preloader.src = neighbour.image;
    }
  }, [artworks, hasSiblings, index, total]);

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index, reduceMotion]);

  const slideCustom: SlideCustom = { direction, offset: reduceMotion ? 0 : 64 };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
    >
      <div
        className="absolute inset-0 bg-[rgba(72,90,124,0.55)] backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${artwork.title} — artwork ${index + 1} of ${total}`}
        className="relative z-10 flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/95 p-3 shadow-[0_30px_80px_rgba(77,93,122,0.28)] backdrop-blur-sm sm:rounded-[2.6rem] sm:p-5 lg:max-w-6xl"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.32, ease }}
      >
        {/* Inner stitched border, echoing the gallery cards */}
        <div className="pointer-events-none absolute inset-2 rounded-[1.9rem] border border-dashed border-[#AFCBFF]/30 sm:inset-3 sm:rounded-[2.2rem]" />

        <div className="relative flex items-center justify-between gap-3 px-1 pb-3">
          <span className="rounded-full bg-secondary/60 px-3 py-1 text-[11px] font-semibold tabular-nums text-primary/80">
            {index + 1} / {total}
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close artwork viewer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral/12 bg-white text-neutral/70 shadow-[0_8px_20px_rgba(77,93,122,0.08)] transition duration-300 hover:border-primary/40 hover:bg-secondary/40 hover:text-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <XIcon size={16} weight="bold" />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="relative flex h-[42vh] items-center justify-center overflow-hidden rounded-[1.6rem] bg-secondary/20 sm:h-[52vh] lg:h-[64vh] lg:flex-1">
            <AnimatePresence initial={false} custom={slideCustom}>
              <motion.img
                key={artwork.image}
                src={artwork.image}
                alt={artwork.alt}
                draggable={false}
                className="absolute max-h-full max-w-full cursor-grab object-contain active:cursor-grabbing"
                custom={slideCustom}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reduceMotion ? 0.2 : 0.35, ease }}
                drag={hasSiblings ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                dragMomentum={false}
                onDragEnd={(_event, info) => {
                  const swipe = info.offset.x;
                  const velocity = info.velocity.x;
                  if (swipe < -80 || velocity < -500) goNext();
                  else if (swipe > 80 || velocity > 500) goPrev();
                }}
              />
            </AnimatePresence>

            {hasSiblings && (
              <>
                <NavButton side="left" onClick={goPrev} label="Previous artwork" />
                <NavButton side="right" onClick={goNext} label="Next artwork" />
              </>
            )}
          </div>

        <aside className="relative flex shrink-0 flex-col px-1 lg:w-72 lg:px-0 xl:w-80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/25 bg-secondary/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/80">
              {artwork.category}
            </span>
            <span className="text-primary/40 text-sm">✦</span>
          </div>

          <h3 className="mt-2 font-display text-xl text-neutral sm:text-2xl">
            {artwork.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral/70">
            {artwork.description}
          </p>

          <div className="lg:flex-1" />

          {hasSiblings && (
            <>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral/45">
                More artwork
              </span>
              <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(175,203,255,0.5),transparent)]" />
            </div>

            <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {artworks.map((item, thumbIndex) => {
              const isActive = thumbIndex === index;

              return (
                <button
                  key={`${item.title}-${thumbIndex}`}
                  ref={(node) => {
                    thumbRefs.current[thumbIndex] = node;
                  }}
                  type="button"
                  onClick={() =>
                    select(thumbIndex, thumbIndex > index ? 1 : -1)
                  }
                  aria-label={`View ${item.title}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-12 w-12 shrink-0 overflow-hidden rounded-2xl border transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-14 sm:w-14 ${
                    isActive
                      ? "border-primary/40 opacity-100 ring-2 ring-primary/20"
                      : "border-white/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              );
            })}
            </div>
            </>
          )}

          <p className="mt-3 hidden text-[11px] text-neutral/45 sm:block">
            Use ← → to browse · Esc to close
          </p>
        </aside>
        </div>
      </motion.div>
    </motion.div>
  );
}

type NavButtonProps = {
  side: "left" | "right";
  onClick: () => void;
  label: string;
};

function NavButton({ side, onClick, label }: NavButtonProps) {
  const Icon = side === "left" ? CaretLeftIcon : CaretRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-neutral/70 shadow-[0_10px_26px_rgba(77,93,122,0.16)] backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary/40 hover:bg-white hover:text-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-12 ${
        side === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
      }`}
    >
      <Icon size={18} weight="bold" />
    </button>
  );
}
