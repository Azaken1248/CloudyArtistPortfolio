import { motion } from "framer-motion";
import { resolveIcon } from "../content/iconRegistry";
import { usePortfolio } from "../content/usePortfolio";
import { fadeUp, scaleIn } from "../components/motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  const { hero } = usePortfolio();
  const PillIcon = resolveIcon(hero.pillIcon);

  return (
    <section id="home" className="scroll-mt-28 py-10 sm:py-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-secondary/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-[0_12px_30px_rgba(175,203,255,0.28)] backdrop-blur"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.5, ease }}
          >
            {PillIcon && <PillIcon size={18} weight="fill" />}
            {hero.pillLabel}
          </motion.div>

          <div className="space-y-6">
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.45em] text-neutral/45"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.18, duration: 0.5, ease }}
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              className="max-w-3xl font-display text-[clamp(2.4rem,4.2vw,4.4rem)] font-bold leading-[0.92] tracking-[-0.03em] text-neutral"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.26, duration: 0.55, ease }}
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              className="max-w-2xl text-base leading-8 text-neutral/75 sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.34, duration: 0.5, ease }}
            >
              {hero.body}
            </motion.p>
            <motion.p
              className="max-w-xl border-l-2 border-primary/30 pl-4 text-sm leading-7 text-neutral/65 sm:text-base"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.5, ease }}
            >
              {hero.accent}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.48, duration: 0.5, ease }}
          >
            {hero.ctaButtons.map((cta) => {
              const Icon = resolveIcon(cta.icon);
              const isPrimary = cta.variant === "primary";

              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={
                    isPrimary
                      ? "inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      : "inline-flex items-center justify-center rounded-full border border-neutral/15 bg-white px-5 py-3 text-sm font-semibold text-neutral transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-secondary/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  }
                >
                  {Icon && <Icon size={18} weight="fill" className="mr-2" />}
                  {cta.label}
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative flex items-center justify-center"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25, duration: 0.6, ease }}
        >
          <div className="hero-glow pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(175,203,255,0.55)_0%,rgba(220,235,255,0.3)_35%,transparent_65%)]" />
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,transparent_50%)] blur-2xl" />

          <div className="orbit-ring pointer-events-none absolute inset-4 rounded-full border border-dashed border-primary/20" />
          <div className="orbit-ring pointer-events-none absolute inset-10 rounded-full border border-primary/10" style={{ animationDirection: "reverse", animationDuration: "28s" }} />

          <svg className="sparkle-1 pointer-events-none absolute left-[8%] top-[12%] h-5 w-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <svg className="sparkle-2 pointer-events-none absolute right-[10%] top-[18%] h-4 w-4 text-primary/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <svg className="sparkle-3 pointer-events-none absolute bottom-[20%] left-[5%] h-3 w-3 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <svg className="sparkle-4 pointer-events-none absolute right-[6%] bottom-[30%] h-2.5 w-2.5 text-primary/45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <svg className="sparkle-5 pointer-events-none absolute left-[18%] bottom-[10%] h-3.5 w-3.5 text-primary/35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>
          <svg className="sparkle-6 pointer-events-none absolute right-[18%] top-[6%] h-2 w-2 text-primary/55" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
          </svg>

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
              src={hero.image}
              alt={hero.imageAlt}
              className="mx-auto w-full max-w-lg object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-white/85 px-5 py-2.5 text-sm shadow-[0_14px_30px_rgba(77,93,122,0.12)] backdrop-blur-xl">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="font-medium text-neutral">{hero.statusPillLabel}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
