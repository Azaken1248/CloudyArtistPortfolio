import type { ArtworkItem } from "../content/portfolio";

type ArtworkCardProps = {
  artwork: ArtworkItem;
};

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] shadow-[0_18px_40px_rgba(77,93,122,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(77,93,122,0.12)]">
      <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] bg-secondary/20">
        <img
          src={artwork.image}
          alt={artwork.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-100"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_82%_24%,rgba(175,203,255,0.12),transparent_20%),linear-gradient(180deg,transparent_48%,rgba(94,106,126,0.08))] opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
    </article>
  );
}
