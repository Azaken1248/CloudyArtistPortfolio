import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { FadeUp } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { artworkItems } from "../content/portfolio";

const INITIAL_COUNT = 4;
const PAGE_SIZE = 4;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function GallerySection() {
  const showcaseItems = artworkItems;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const hasMore = visibleCount < showcaseItems.length;

  const visibleItems = showcaseItems.slice(0, visibleCount);

  function showMore() {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, showcaseItems.length));
  }

  function showLess() {
    setVisibleCount(INITIAL_COUNT);
  }

  return (
    <section id="gallery" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Artwork gallery"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="mt-10 space-y-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-4xl px-2 py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#eef5ff_0%,rgba(238,245,255,0)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#eef5ff_0%,rgba(238,245,255,0)_100%)]" />

            <div className="gallery-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
              {showcaseItems.concat(showcaseItems).map((artwork, index) => (
                <article
                  key={`${artwork.title}-${index}`}
                  className={`group relative w-[18rem] shrink-0 overflow-hidden rounded-4xl shadow-[0_22px_50px_rgba(77,93,122,0.12)] sm:w-88 lg:w-100 ${index % 2 === 1 ? "mt-6 sm:mt-10" : ""}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.96),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(175,203,255,0.16),transparent_22%),linear-gradient(180deg,transparent_42%,rgba(94,106,126,0.08))] opacity-90" />
                  <img
                    src={artwork.image}
                    alt={artwork.alt}
                    className="h-88 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-104"
                    loading={index < showcaseItems.length ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(94,106,126,0.12)_100%)]" />
                </article>
              ))}
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

        {/* Show more / Show less */}
        {showcaseItems.length > INITIAL_COUNT && (
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
                  <CaretDown
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                  Show more artwork
                  <span className="ml-1 rounded-full bg-secondary/60 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-primary/80">
                    {showcaseItems.length - visibleCount}
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
                  <CaretUp
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
