import { motion } from "framer-motion";
import { resolveIcon } from "../content/iconRegistry";
import { fadeUp, StaggerList } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { usePortfolio } from "../content/usePortfolio";

export function ContactSection() {
  const { contact } = usePortfolio();
  const { section, infoCard, form } = contact;
  const SubmitIcon = resolveIcon(form.submitIcon);

  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <StaggerList className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.article
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          variants={fadeUp}
        >
          <div className="inline-flex rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {infoCard.tag}
          </div>

          <h3 className="mt-6 font-display text-3xl text-neutral sm:text-4xl">
            {infoCard.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-neutral/75">
            {infoCard.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {infoCard.notes.map((note) => (
              <div
                key={note}
                className="rounded-[1.25rem] bg-secondary/35 px-4 py-4 text-sm leading-6 text-neutral/70"
              >
                {note}
              </div>
            ))}
          </div>
        </motion.article>

        <motion.form
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          onSubmit={(event) => event.preventDefault()}
          action={form.actionUrl}
          variants={fadeUp}
        >
          {/* Render inline fields (first two side-by-side, rest full-width) */}
          {(() => {
            const inlineFields = form.fields.filter((f) => f.type !== "textarea");
            const blockFields = form.fields.filter((f) => f.type === "textarea");
            const topRow = inlineFields.slice(0, 2);
            const restInline = inlineFields.slice(2);

            return (
              <>
                {topRow.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {topRow.map((field) => (
                      <label key={field.name} className="space-y-2 text-sm font-medium text-neutral/70">
                        <span>{field.label}</span>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                        />
                      </label>
                    ))}
                  </div>
                )}

                {restInline.map((field) => (
                  <label key={field.name} className="mt-4 block space-y-2 text-sm font-medium text-neutral/70">
                    <span>{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                ))}

                {blockFields.map((field) => (
                  <label key={field.name} className="mt-4 block space-y-2 text-sm font-medium text-neutral/70">
                    <span>{field.label}</span>
                    <textarea
                      name={field.name}
                      rows={field.rows ?? 6}
                      placeholder={field.placeholder}
                      className="w-full resize-y rounded-3xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                ))}
              </>
            );
          })()}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-neutral/55">
              {form.disclaimer}
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {SubmitIcon && <SubmitIcon size={18} weight="fill" className="mr-2" />}
              {form.submitLabel}
            </button>
          </div>
        </motion.form>
      </StaggerList>
    </section>
  );
}
