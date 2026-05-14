import { FadeUp } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const lineClass = align === "center" ? "mx-auto" : "";

  return (
    <FadeUp className={`${alignClass} max-w-4xl`} as="header">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/75">
        {eyebrow}
      </p>
      <div className="mt-3 space-y-4">
        <h2 className="font-display text-[clamp(1.7rem,3.2vw,3.4rem)] font-bold leading-[0.95] tracking-[-0.03em] text-neutral">
          {title}
        </h2>
        <div
          className={`h-1 w-24 rounded-full bg-[linear-gradient(90deg,rgba(160,195,255,1),rgba(220,235,255,0.35))] ${lineClass}`}
        />
      </div>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeUp>
  );
}
