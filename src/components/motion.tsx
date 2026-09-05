import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp, staggerContainer } from "./motionVariants";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type StaggerListProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof motion;
};

export function StaggerList({
  children,
  className,
  as = "div",
}: StaggerListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </Tag>
  );
}
