import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import type { ArtworkItem } from "../content/types";

type ArtworkCardProps = {
  artwork: ArtworkItem;
  className?: string;
  index?: number;
};

export function ArtworkCard({ artwork, className = "", index = 0 }: ArtworkCardProps) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-[2rem] shadow-[0_18px_40px_rgba(77,93,122,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(77,93,122,0.14)] ${className}`}
      variants={fadeUp}
      transition={{ delay: index * 0.07 }}
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
  );
}
