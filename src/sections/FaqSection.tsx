import { InfoIcon, ProhibitInsetIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { StaggerList, fadeUp } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { usePortfolio } from "../content/usePortfolio";

export function FaqSection() {
  const { faqPage, faqs, tosSections } = usePortfolio();

  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow={faqPage.section.eyebrow}
        title={faqPage.section.title}
        description={faqPage.section.description}
      />

      <StaggerList className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
        <motion.article
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          variants={fadeUp}
        >
          <h3 className="font-display text-2xl text-neutral sm:text-3xl">
            {faqPage.faqHeading}
          </h3>
          <StaggerList className="mt-6 space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="rounded-3xl bg-secondary/30 p-5"
                variants={fadeUp}
                transition={{ delay: index * 0.07 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  {faq.question}
                </h4>
                <p className="mt-3 text-sm leading-6 text-neutral/75">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </StaggerList>
        </motion.article>

        <motion.article
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          variants={fadeUp}
        >
          <h3 className="font-display text-2xl text-neutral sm:text-3xl">
            {faqPage.tosHeading}
          </h3>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-primary/40">
            <span>· · · ·</span>
            <span>・✦・</span>
            <span>· · · ·</span>
          </div>

          <p className="mt-3 text-center text-sm leading-7 text-neutral/75">
            {faqPage.tosAcceptanceText}
          </p>

          <StaggerList className="mt-5 space-y-5">
            {tosSections.map((section, index) => {
              const isProhibited = section.variant === "prohibited";
              const isInfo = section.variant === "info";

              const SectionIcon = isProhibited
                ? ProhibitInsetIcon
                : isInfo
                  ? InfoIcon
                  : ShieldCheckIcon;

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
                <motion.div
                  key={section.heading}
                  className={`rounded-2xl ${bgColor} p-4 ring-1 ${ringColor}`}
                  variants={fadeUp}
                  transition={{ delay: index * 0.07 }}
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
                </motion.div>
              );
            })}
          </StaggerList>

          <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-primary/40">
            <span>· · · ·</span>
            <span>・✦・</span>
            <span>· · · ·</span>
          </div>
        </motion.article>
      </StaggerList>
    </section>
  );
}
