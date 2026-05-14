import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { fadeUp, StaggerList } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";

const contactNotes = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <StaggerList className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.article
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          variants={fadeUp}
        >
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
        </motion.article>

        <motion.form
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          onSubmit={(event) => event.preventDefault()}
          variants={fadeUp}
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
        </motion.form>
      </StaggerList>
    </section>
  );
}
