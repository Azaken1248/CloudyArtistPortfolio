import { useState } from "react";
import { motion } from "framer-motion";
import { resolveIcon, isUrl } from "../content/iconRegistry";
import { fadeUp, StaggerList } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { usePortfolio } from "../content/usePortfolio";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const { contact } = usePortfolio();
  const { section, infoCard, form } = contact;
  const SubmitIcon = resolveIcon(form.submitIcon);
  const CheckIcon = resolveIcon("Check");
  const WarningIcon = resolveIcon("Warning");

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [preferredContact, setPreferredContact] = useState<string>("Either");



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("sending");
    setStatusMessage("");

    const formData = new FormData(formElement);
    const data = {
      name: formData.get("name") as string,
      email: (formData.get("email") || "") as string,
      discordId: (formData.get("discordId") || "") as string,
      preferredContact: (formData.get("preferredContact") || "Either") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    if (data.preferredContact === "Email" && !data.email) {
      setStatus("error");
      setStatusMessage("Please provide your Email Address so the artist can reply to you!");
      return;
    }

    if (data.preferredContact === "Discord" && !data.discordId) {
      setStatus("error");
      setStatusMessage("Please provide your Discord ID so the artist can reply to you!");
      return;
    }

    if (data.preferredContact === "Either" && !data.email && !data.discordId) {
      setStatus("error");
      setStatusMessage("Please provide either your Email Address or Discord ID (or both) so the artist can reply to you!");
      return;
    }

    const targetUrl = form.actionUrl || "http://cloudyrelayapi.azaken.com/api/messages";

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage(result.message || "Your message has been sent successfully!");
        formElement.reset();
        setPreferredContact("Either");
      } else {
        setStatus("error");
        setStatusMessage(result.error || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
      setStatusMessage("Could not connect to the relay server. Please check your connection or try again later.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        align="center"
        panelSrc="/Panel%20Full/panel-full_contact.svg"
      />

      <StaggerList className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.article
          className="rounded-4xl border border-neutral/10 bg-white p-7 shadow-[0_20px_50px_rgba(77,93,122,0.08)]"
          variants={fadeUp}
        >
          <div className="inline-flex rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {infoCard.tag}
          </div>

          <h3 className="mt-6 font-display text-3xl text-slate-800 sm:text-4xl">
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
          onSubmit={handleSubmit}
          variants={fadeUp}
        >
          {/* Row 1: Name and Preferred Contact Method */}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-neutral/70 block w-full">
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                disabled={status === "sending"}
                placeholder="Your Name"
                className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-neutral/70 block w-full">
              <span>Preferred Contact Method</span>
              <select
                name="preferredContact"
                value={preferredContact}
                onChange={(e) => setPreferredContact(e.target.value)}
                required
                disabled={status === "sending"}
                className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-50 cursor-pointer"
              >
                <option value="Either">Either (Email or Discord)</option>
                <option value="Email">Email</option>
                <option value="Discord">Discord</option>
              </select>
            </label>
          </div>

          {/* Row 2: Conditional Contact Channels */}
          <div className={`mt-4 ${preferredContact === "Either" ? "grid gap-4 sm:grid-cols-2" : ""}`}>
            {(preferredContact === "Either" || preferredContact === "Email") && (
              <label className="space-y-2 text-sm font-medium text-neutral/70 block w-full">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required={preferredContact === "Email"}
                  disabled={status === "sending"}
                  className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </label>
            )}

            {(preferredContact === "Either" || preferredContact === "Discord") && (
              <label className="space-y-2 text-sm font-medium text-neutral/70 block w-full">
                <span>Discord ID</span>
                <input
                  type="text"
                  name="discordId"
                  placeholder="e.g. username"
                  required={preferredContact === "Discord"}
                  disabled={status === "sending"}
                  className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </label>
            )}
          </div>

          {/* Row 3: Subject */}
          <label className="mt-4 block space-y-2 text-sm font-medium text-neutral/70">
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="Subject of inquiry"
              disabled={status === "sending"}
              className="w-full rounded-2xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
            />
          </label>

          {/* Row 4: Message */}
          <label className="mt-4 block space-y-2 text-sm font-medium text-neutral/70">
            <span>Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Describe your request..."
              required
              disabled={status === "sending"}
              className="w-full resize-y rounded-3xl border border-neutral/10 bg-white px-4 py-3 text-neutral outline-none transition placeholder:text-neutral/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
            />
          </label>

          {/* Status Message Banners */}
          {status === "success" && (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-200/50 bg-emerald-50 p-4 text-sm text-emerald-800">
              {CheckIcon && <CheckIcon size={18} className="mt-0.5 shrink-0 text-emerald-600" />}
              <span>{statusMessage}</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-rose-200/50 bg-rose-50 p-4 text-sm text-rose-800">
              {WarningIcon && <WarningIcon size={18} className="mt-0.5 shrink-0 text-rose-600" />}
              <span>{statusMessage}</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-neutral/55">
              {form.disclaimer}
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  {form.submitIcon ? (
                    isUrl(form.submitIcon) ? (
                      <img src={form.submitIcon} alt="" className="h-[18px] w-[18px] object-contain rounded-sm mr-2" />
                    ) : SubmitIcon ? (
                      <SubmitIcon size={18} weight="fill" className="mr-2" />
                    ) : null
                  ) : null}
                  {form.submitLabel}
                </>
              )}
            </button>
          </div>
        </motion.form>
      </StaggerList>
    </section>
  );
}

