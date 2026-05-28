import { FadeUp } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  panelSrc?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  panelSrc,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const lineClass = align === "center" ? "mx-auto" : "";

  if (panelSrc) {
    return (
      <FadeUp className="mx-auto w-full max-w-6xl" as="header">
        <div className="relative mx-auto w-full">
          <img
            src={panelSrc}
            alt=""
            aria-hidden="true"
            className="block h-auto w-full select-none"
            loading="eager"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.52)_0%,rgba(255,255,255,0.18)_60%,rgba(255,255,255,0.02)_80%,transparent_95%)]" />

          {/* Absolute content centered with side margins to never overlap corner illustrations */}
          <div className="absolute inset-0 flex items-center justify-center px-[16%] sm:px-[20%] lg:px-[24%] py-2 sm:py-4">
            <div className="w-full text-center">
              <p className="text-[clamp(0.55rem,0.8vw,0.75rem)] font-bold uppercase tracking-[0.24em] sm:tracking-[0.34em] text-[#D26E88] select-none leading-none">
                {eyebrow}
              </p>
              <div className="mt-1 sm:mt-1.5 space-y-1 sm:space-y-2 lg:space-y-3">
                <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(0.85rem,2vw,2.6rem)] font-bold leading-[1.1] tracking-normal text-slate-800">
                  {title}
                </h2>
                <div
                  className={`h-0.5 w-10 sm:w-16 rounded-full bg-[linear-gradient(90deg,rgba(160,195,255,1),rgba(220,235,255,0.35))] ${lineClass}`}
                />
              </div>
              {/* Description is shown inside the panel only on desktop/tablet to prevent vertical overflow */}
              {description ? (
                <p className="hidden md:block mx-auto mt-1 lg:mt-2 max-w-2xl text-[clamp(0.72rem,0.9vw,0.9rem)] leading-relaxed text-[#5E6A7E]/80">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* On smaller screens (below md), the description is rendered below the banner in normal flow */}
        {description && (
          <p className="md:hidden block mt-4 px-6 text-center text-xs sm:text-sm leading-relaxed text-[#5E6A7E]/95 max-w-xl mx-auto">
            {description}
          </p>
        )}
      </FadeUp>
    );
  }

  return (
    <FadeUp className={`${alignClass} max-w-4xl`} as="header">
      <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#D26E88] opacity-90">
        {eyebrow}
      </p>
      <div className="mt-3 space-y-4">
        <h2 className="font-display text-[clamp(1.7rem,3.2vw,3.4rem)] font-bold leading-[1.1] tracking-normal text-slate-800">
          {title}
        </h2>
        <div
          className={`h-0.5 w-24 rounded-full bg-[linear-gradient(90deg,rgba(160,195,255,1),rgba(220,235,255,0.35))] ${lineClass}`}
        />
      </div>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5E6A7E]/90 sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeUp>
  );
}

