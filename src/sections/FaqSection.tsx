import { Info, ProhibitInset, ShieldCheck } from "@phosphor-icons/react";
import { SectionHeading } from "../components/SectionHeading";
import { faqs, tosSections } from "../content/portfolio";

export function FaqSection() {
  return (
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

          <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-primary/40">
            <span>· · · ·</span>
            <span>・✦・</span>
            <span>· · · ·</span>
          </div>
        </article>
      </div>
    </section>
  );
}
