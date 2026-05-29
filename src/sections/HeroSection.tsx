import { motion } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";
import { resolveIcon, isUrl } from "../content/iconRegistry";
import { usePortfolio } from "../content/usePortfolio";
import { fadeUp, scaleIn } from "../components/motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  const { hero } = usePortfolio();
  const PillIcon = resolveIcon(hero.pillIcon);
  const introPanelSrc = "/Panel%20Full/panel-full_char-intro.svg";

  return (
    <section id="home" className="scroll-mt-28 py-10 sm:py-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

        <div className="space-y-8">
          <motion.div
            className="relative mx-auto w-full max-w-4xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.5, ease }}
          >
            {/* Shows high-fidelity hand-drawn SVG background on all screens */}
            <div className="relative mx-auto w-full">
              <img
                src={introPanelSrc}
                alt=""
                aria-hidden="true"
                className="block h-auto w-full select-none"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-[12%] sm:px-[16%]">
                <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 text-[clamp(0.55rem,0.9vw,0.95rem)] font-bold uppercase tracking-[0.2em] sm:tracking-[0.36em] text-[#E06D8C]">
                  {hero.pillIcon ? (
                    isUrl(hero.pillIcon) ? (
                      <img src={hero.pillIcon} alt="" className="h-3.5 w-3.5 object-contain rounded-sm shrink-0" />
                    ) : PillIcon ? (
                      <PillIcon size={14} weight="fill" className="shrink-0 text-[#E06D8C]/90" />
                    ) : null
                  ) : null}
                  <span className="leading-tight">{hero.pillLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.45em] text-[#D26E88] opacity-90"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.18, duration: 0.5, ease }}
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              className="max-w-3xl font-display text-[clamp(2.4rem,4.2vw,4.2rem)] font-bold leading-[1.1] tracking-normal text-slate-800"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.26, duration: 0.55, ease }}
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              className="max-w-2xl text-base leading-relaxed text-[#5E6A7E]/90 sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.34, duration: 0.5, ease }}
            >
              {hero.body}
            </motion.p>
            <motion.p
              className="max-w-xl border-l-2 border-[#AFCBFF]/45 pl-4 text-sm leading-relaxed text-[#5E6A7E]/75 sm:text-base"
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
                  {cta.icon ? (
                    isUrl(cta.icon) ? (
                      <img src={cta.icon} alt="" className="h-[18px] w-[18px] object-contain rounded-sm mr-2" />
                    ) : Icon ? (
                      <Icon size={18} weight="fill" className="mr-2" />
                    ) : null
                  ) : null}
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

          <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-3">
            <div className="relative flex items-center gap-2 whitespace-nowrap rounded-2xl rounded-tr-none border-2 border-[#AFCBFF]/40 bg-white/95 px-5 py-2.5 shadow-[0_12px_28px_rgba(175,203,255,0.22)] backdrop-blur-md transition-transform duration-300 hover:scale-105">
              {/* Cute Inner Stitching Border */}
              <div className="absolute inset-0.5 rounded-xl rounded-tr-none border border-dashed border-[#AFCBFF]/50 pointer-events-none" />
              
              {/* Left Decorative Sparkle */}
              <span className="absolute -top-2.5 -left-2.5 animate-pulse text-[#E06D8C] text-xs select-none">✦</span>
              {/* Right Decorative Sparkle */}
              <span className="absolute -bottom-2 -right-1.5 text-primary text-[10px] select-none">✦</span>
              
              {/* Cute Icon */}
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center text-[#E06D8C] animate-bounce" style={{ animationDuration: '2.5s' }}>
                <Sparkle size={16} weight="fill" />
              </span>
              
              <span className="font-display text-[13px] font-bold tracking-wide text-slate-800 relative z-10">
                {hero.statusPillLabel}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
