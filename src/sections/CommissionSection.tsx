import { motion } from "framer-motion";
import { FadeUp, StaggerList, fadeUp } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { usePortfolio } from "../content/usePortfolio";

export function CommissionSection() {
  const { commissions } = usePortfolio();
  const { section, featured, tiers } = commissions;

  return (
    <section
      id="commission"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        align="center"
        panelSrc="/Panel%20Full/panel-full_commissions.svg"
      />

      <StaggerList
        className={`mt-10 grid gap-6 ${featured ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}
      >
        {featured && (
          <motion.article
            className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                {featured.tag}
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {featured.badge}
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl text-slate-800 sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral/75">
              {featured.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-neutral/70">
              {featured.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.article>
        )}

        <FadeUp>
          <StaggerList className="grid gap-4 sm:grid-cols-2">
            {tiers.map((tier, index) => (
              <motion.article
                key={tier.name}
                className="rounded-4xl border border-neutral/10 bg-white p-6 shadow-[0_18px_40px_rgba(77,93,122,0.08)]"
                variants={fadeUp}
                transition={{ delay: index * 0.07 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-slate-800 sm:text-2xl">
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
              </motion.article>
            ))}
          </StaggerList>
        </FadeUp>
      </StaggerList>
    </section>
  );
}
