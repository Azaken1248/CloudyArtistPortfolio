import {
  ArrowRight,
  EnvelopeSimple,
  Image as ImageIcon,
  Palette,
  ProhibitInset,
  ShieldCheck,
  Info,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { ArtworkCard } from "./components/ArtworkCard";
import { SectionHeading } from "./components/SectionHeading";
import { SiteNav } from "./components/SiteNav";
import {
  artworkItems,
  commissionTiers,
  faqs,
  heroImage,
  heroPillLabel,
  navItems,
  siteName,
  tosSections,
} from "./content/portfolio";

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const showcaseItems = artworkItems;
  const bleedGridItems = artworkItems.slice(1);

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveSection = () => {
      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const activationLine = headerHeight + 24;

      let nextSectionId = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) {
          continue;
        }

        const { top } = section.getBoundingClientRect();

        if (top <= activationLine) {
          nextSectionId = item.id;
        } else {
          break;
        }
      }

      setActiveSection(nextSectionId);
    };

    const requestSectionUpdate = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    };

    requestSectionUpdate();
    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
    };
  }, []);

  useEffect(() => {
    const syncActiveSectionToHash = () => {
      const nextSectionId = window.location.hash.replace(/^#/, "");

      if (!nextSectionId) {
        setActiveSection(navItems[0].id);
        return;
      }

      if (navItems.some((item) => item.id === nextSectionId)) {
        setActiveSection(nextSectionId);
      }
    };

    syncActiveSectionToHash();
    window.addEventListener("hashchange", syncActiveSectionToHash);

    return () =>
      window.removeEventListener("hashchange", syncActiveSectionToHash);
  }, []);

  const contactNotes = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor",
  ];

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_14%_12%,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.88)_16%,transparent_36%),radial-gradient(circle_at_82%_16%,rgba(220,235,255,0.96)_0%,transparent_26%),radial-gradient(circle_at_50%_36%,rgba(175,203,255,0.48)_0%,transparent_30%),radial-gradient(circle_at_18%_78%,rgba(248,250,255,0.96)_0%,transparent_24%),radial-gradient(circle_at_84%_82%,rgba(220,235,255,0.88)_0%,transparent_26%),linear-gradient(180deg,#eef5ff_0%,#f8faff_40%,#eaf3ff_100%)] text-neutral">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_12%_14%,rgba(255,255,255,0.99)_0%,transparent_18%),radial-gradient(circle_at_82%_10%,rgba(220,235,255,0.96)_0%,transparent_22%),radial-gradient(circle_at_50%_36%,rgba(175,203,255,0.42)_0%,transparent_24%),radial-gradient(circle_at_18%_78%,rgba(248,250,255,0.92)_0%,transparent_22%),radial-gradient(circle_at_84%_82%,rgba(220,235,255,0.84)_0%,transparent_24%)] blur-3xl" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,250,255,0.36)_42%,rgba(255,255,255,0.94)_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-32 -z-10 h-80 w-80 rounded-full bg-[rgba(220,235,255,0.92)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-96 -z-10 h-96 w-96 rounded-full bg-[rgba(175,203,255,0.62)] blur-3xl" />
      <img
        src="/pastel-cloud-pattern.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[-5] h-full w-full opacity-55"
      />

      <SiteNav items={navItems} activeId={activeSection} />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              {/* Animated glow backdrop */}
              <div className="hero-glow pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(175,203,255,0.55)_0%,rgba(220,235,255,0.3)_35%,transparent_65%)]" />
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,transparent_50%)] blur-2xl" />

              {/* Orbit ring */}
              <div className="orbit-ring pointer-events-none absolute inset-4 rounded-full border border-dashed border-primary/20" />
              <div className="orbit-ring pointer-events-none absolute inset-10 rounded-full border border-primary/10" style={{ animationDirection: "reverse", animationDuration: "28s" }} />

              {/* Floating sparkles */}
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

              {/* Character image — floating with drop shadow */}
              <div className="hero-character relative z-10">
                <img
                  src={heroImage}
                  alt="Cloudy PNGTuber character"
                  className="mx-auto h-96 w-full max-w-80 object-contain drop-shadow-[0_20px_40px_rgba(94,106,126,0.18)] sm:h-[28rem]"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Pill label — sits below the character, doesn't float */}
              <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
                <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-white/85 px-5 py-2.5 text-sm shadow-[0_14px_30px_rgba(77,93,122,0.12)] backdrop-blur-xl">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="font-medium text-neutral">{heroPillLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      loading={
                        index < showcaseItems.length ? "eager" : "lazy"
                      }
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(94,106,126,0.12)_100%)]" />
                  </article>
                ))}
              </div>
            </div>

            {/* Decorative section divider */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(175,203,255,0.5))]" />
              <svg className="h-4 w-4 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
              </svg>
              <div className="h-px w-16 bg-[linear-gradient(270deg,transparent,rgba(175,203,255,0.5))]" />
            </div>

            {/* Uniform Grid */}
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

        <section
          id="commission"
          className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
        >
          <SectionHeading
            eyebrow="Commissions"
            title="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Lorem ipsum
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  Lorem ipsum dolor
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl text-neutral sm:text-4xl">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-neutral/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-neutral/70">
                <li>
                  • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  • Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </li>
                <li>
                  • Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </li>
              </ul>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {commissionTiers.map((tier) => (
                <article
                  key={tier.name}
                  className="rounded-4xl border border-neutral/10 bg-white p-6 shadow-[0_18px_40px_rgba(77,93,122,0.08)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-neutral sm:text-2xl">
                      {tier.name}
                    </h3>
                    <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold text-primary">
                      {tier.priceLabel}
                    </span>
                  </div>

                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-neutral/45">
                    {tier.detailTag}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-neutral/75">
                    {tier.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="FAQ & TOS"
            title="Questions & terms of service."
            description="Everything you need to know before commissioning. Please read the terms carefully — commissioning me means you accept them."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
            <article className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]">
              <h3 className="font-display text-2xl text-neutral sm:text-3xl">
                Common questions
              </h3>
              <div className="mt-6 space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-3xl bg-secondary/30 p-5"
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                      {faq.question}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-neutral/75">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]">
              <h3 className="font-display text-2xl text-neutral sm:text-3xl">
                Terms of service
              </h3>

              {/* Decorative TOS divider */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-primary/40">
                <span>· · · ·</span>
                <span>・✦・</span>
                <span>· · · ·</span>
              </div>

              <p className="mt-3 text-center text-sm leading-7 text-neutral/75">
                Commissioning me means you have read and accepted the TOS.
              </p>

              <div className="mt-5 space-y-5">
                {tosSections.map((section) => {
                  const isProhibited = section.variant === "prohibited";
                  const isInfo = section.variant === "info";

                  const SectionIcon = isProhibited
                    ? ProhibitInset
                    : isInfo
                      ? Info
                      : ShieldCheck;

                  const headingColor = isProhibited
                    ? "text-red-500/80"
                    : "text-primary";

                  const bgColor = isProhibited
                    ? "bg-red-50/60"
                    : isInfo
                      ? "bg-blue-50/40"
                      : "bg-secondary/25";

                  const ringColor = isProhibited
                    ? "ring-red-200/50"
                    : "ring-neutral/10";

                  return (
                    <div
                      key={section.heading}
                      className={`rounded-2xl ${bgColor} p-4 ring-1 ${ringColor}`}
                    >
                      <div className="flex items-center gap-2">
                        <SectionIcon
                          size={16}
                          weight="fill"
                          className={headingColor}
                        />
                        <h4
                          className={`text-xs font-semibold uppercase tracking-[0.25em] ${headingColor}`}
                        >
                          {section.heading}
                        </h4>
                      </div>

                      <ul className="mt-3 space-y-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-[13px] leading-5 text-neutral/70"
                          >
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isProhibited ? "bg-red-400/60" : "bg-primary/50"}`}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Bottom TOS divider */}
              <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-primary/40">
                <span>· · · ·</span>
                <span>・✦・</span>
                <span>· · · ·</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Contact"
            title="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]">
              <div className="inline-flex rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Lorem ipsum
              </div>

              <h3 className="mt-6 font-display text-3xl text-neutral sm:text-4xl">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="mt-4 text-base leading-7 text-neutral/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {contactNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[1.25rem] bg-secondary/35 px-4 py-4 text-sm leading-6 text-neutral/70"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </article>

            <form
              className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-neutral/70">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Lorem ipsum dolor sit amet"
                    className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium text-neutral/70">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Lorem ipsum dolor sit amet"
                    className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2 text-sm font-medium text-neutral/70">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Lorem ipsum dolor sit amet"
                  className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="mt-4 block space-y-2 text-sm font-medium text-neutral/70">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  className="w-full resize-y rounded-3xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-neutral/55">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <ArrowRight size={18} weight="fill" className="mr-2" />
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-secondary/70 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-neutral/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
