import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { FadeUp } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { usePortfolio } from "../content/usePortfolio";

const INITIAL_COUNT = 4;
const PAGE_SIZE = 4;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function GallerySection() {
  const { gallery, artworks } = usePortfolio();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const hasMore = visibleCount < artworks.length;

  const visibleItems = artworks.slice(0, visibleCount);

  function showMore() {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, artworks.length));
  }

  function showLess() {
    setVisibleCount(INITIAL_COUNT);
  }

  return (
    <section id="gallery" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
        align="center"
        panelSrc="/Panel%20Full/panel-full_artworks.svg"
      />

      <div className="mt-10 space-y-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-4xl px-2 py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#eef5ff_0%,rgba(238,245,255,0)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#eef5ff_0%,rgba(238,245,255,0)_100%)]" />

            <div className="gallery-marquee flex items-start w-max gap-6 py-4 hover:[animation-play-state:paused]">
              {artworks.concat(artworks).map((artwork, index) => {
                const isAlternate = index % 2 === 1;
                const rotationClass = isAlternate
                  ? "rotate-[1.5deg] mt-6 sm:mt-10 hover:rotate-0"
                  : "-rotate-[1.5deg] hover:rotate-0";

                return (
                  <article
                    key={`${artwork.title}-${index}`}
                    className={`group relative w-[16rem] sm:w-76 lg:w-84 shrink-0 rounded-[2.2rem] bg-white/90 border border-white/60 p-3 shadow-[0_16px_36px_rgba(77,93,122,0.08)] backdrop-blur-sm transition-all duration-500 ${rotationClass} hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(175,203,255,0.22)] hover:border-primary/50`}
                  >
                    {/* Inner Stitched Border */}
                    <div className="absolute inset-1.5 rounded-[1.8rem] border border-dashed border-[#AFCBFF]/30 pointer-events-none" />

                    {/* Decorative Washi Tape */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[rgba(235,242,252,0.7)] border-x border-[#AFCBFF]/30 backdrop-blur-sm rotate-[-2deg] opacity-80" />

                    <div className="relative overflow-hidden rounded-[1.6rem] bg-secondary/10">
                      <img
                        src={artwork.image}
                        alt={artwork.alt}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-76 lg:h-88"
                        loading={index < artworks.length ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>

                    {/* Cute floating sparkles on the card corners */}
                    <span className="absolute bottom-4.5 right-4.5 z-10 text-[#E06D8C]/90 text-sm animate-pulse">✦</span>
                    <span className="absolute bottom-5.5 left-4.5 z-10 text-primary/70 text-xs">✦</span>
                  </article>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <FadeUp className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(175,203,255,0.5))]" />
          <svg className="h-4 w-4 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <div className="h-px w-16 bg-[linear-gradient(270deg,transparent,rgba(175,203,255,0.5))]" />
        </FadeUp>

        <LayoutGroup>
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            layout
            transition={{ layout: { duration: 0.4, ease } }}
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((artwork, index) => (
                <motion.article
                  key={artwork.title}
                  className="group overflow-hidden rounded-[2rem] shadow-[0_18px_40px_rgba(77,93,122,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(77,93,122,0.14)]"
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease,
                    layout: { duration: 0.35, ease },
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary/20">
                    <img
                      src={artwork.image}
                      alt={artwork.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {artworks.length > INITIAL_COUNT && (
          <motion.div
            className="flex items-center justify-center gap-3 pt-2"
            layout
            transition={{ layout: { duration: 0.35, ease } }}
          >
            <AnimatePresence mode="wait">
              {hasMore ? (
                <motion.button
                  key="show-more"
                  type="button"
                  onClick={showMore}
                  className="group inline-flex items-center gap-2 rounded-full border border-neutral/12 bg-white px-6 py-3 text-sm font-semibold text-neutral shadow-[0_10px_24px_rgba(77,93,122,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-secondary/40 hover:shadow-[0_14px_30px_rgba(175,203,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease }}
                >
                  <CaretDownIcon
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                  Show more artwork
                  <span className="ml-1 rounded-full bg-secondary/60 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-primary/80">
                    {artworks.length - visibleCount}
                  </span>
                </motion.button>
              ) : (
                <motion.button
                  key="show-less"
                  type="button"
                  onClick={showLess}
                  className="group inline-flex items-center gap-2 rounded-full border border-neutral/12 bg-white px-5 py-3 text-sm font-semibold text-neutral/60 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-secondary/40 hover:text-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease }}
                >
                  <CaretUpIcon
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  Show less
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
