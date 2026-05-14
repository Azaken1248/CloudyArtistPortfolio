import { ArtworkCard } from "../components/ArtworkCard";
import { SectionHeading } from "../components/SectionHeading";
import { artworkItems } from "../content/portfolio";

export function GallerySection() {
  const showcaseItems = artworkItems;
  const bleedGridItems = artworkItems.slice(1);

  return (
    <section id="gallery" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Artwork gallery"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="mt-10 space-y-6">
        <div className="relative overflow-hidden rounded-4xl px-2 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#eef5ff_0%,rgba(238,245,255,0)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#eef5ff_0%,rgba(238,245,255,0)_100%)]" />

          <div className="gallery-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
            {showcaseItems.concat(showcaseItems).map((artwork, index) => (
              <article
                key={`${artwork.title}-${index}`}
                className={`group relative w-[18rem] shrink-0 overflow-hidden rounded-4xl shadow-[0_22px_50px_rgba(77,93,122,0.12)] sm:w-88 lg:w-100 ${index % 2 === 1 ? "mt-6 sm:mt-10" : ""
                  }`}
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

        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(175,203,255,0.5))]" />
          <svg className="h-4 w-4 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <div className="h-px w-16 bg-[linear-gradient(270deg,transparent,rgba(175,203,255,0.5))]" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bleedGridItems.map((artwork) => (
            <ArtworkCard
              key={artwork.title}
              artwork={artwork}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
