import {
  EnvelopeSimple,
  Image as ImageIcon,
  Palette,
} from "@phosphor-icons/react";
import { heroImage, heroPillLabel, siteName } from "../content/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-28 py-10 sm:py-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-[0_12px_30px_rgba(175,203,255,0.28)] backdrop-blur">
            <Palette size={18} weight="fill" />
            Original character introduction
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-neutral/45">
              {siteName}
            </p>
            <h1 className="max-w-3xl font-display text-[clamp(2.4rem,4.2vw,4.4rem)] font-bold leading-[0.92] tracking-[-0.03em] text-neutral">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-neutral/75 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="max-w-xl border-l-2 border-primary/30 pl-4 text-sm leading-7 text-neutral/65 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <ImageIcon size={18} weight="fill" className="mr-2" />
              View artwork
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral/15 bg-white px-5 py-3 text-sm font-semibold text-neutral transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-secondary/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <EnvelopeSimple size={18} weight="fill" className="mr-2" />
              Request commission
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="hero-character relative z-10 w-full"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 68% at 50% 48%, black 28%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 68% at 50% 48%, black 28%, transparent 72%)",
            }}
          >
            <img
              src={heroImage}
              alt="Cloudy PNGTuber character"
              className="mx-auto w-full max-w-lg object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-white/85 px-5 py-2.5 text-sm shadow-[0_14px_30px_rgba(77,93,122,0.12)] backdrop-blur-xl">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="font-medium text-neutral">{heroPillLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
