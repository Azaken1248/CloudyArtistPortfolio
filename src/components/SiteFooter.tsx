import { resolveIcon, isUrl } from "../content/iconRegistry";
import { usePortfolio } from "../content/usePortfolio";
import { FadeUp } from "./motion";

export function SiteFooter() {
  const { footer, socials } = usePortfolio();

  return (
    <FadeUp as="footer">
      <div className="border-t border-secondary/70 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-neutral/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="space-y-1.5">
            <p>{footer.copyright}</p>
            <p>{footer.tagline}</p>
            <p className="text-[11px] text-neutral/45 mt-2">
              Website by{" "}
              <a
                href="https://github.com/Azaken1248"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary/80 hover:text-primary transition-colors underline decoration-dotted decoration-2 underline-offset-2"
              >
                Azaken1248
              </a>{" "}
              • Assets by{" "}
              <a
                href="https://instagram.com/snowysushi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D26E88] hover:text-[#E06D8C] transition-colors underline decoration-dotted decoration-2 underline-offset-2"
              >
                snowysushi
              </a>
            </p>
          </div>

          {socials.length > 0 && (
            <div className="flex items-center gap-3">
              {socials.map((link) => {
                const Icon = resolveIcon(link.icon);
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-neutral/10 bg-white text-neutral/50 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:text-primary hover:shadow-[0_10px_24px_rgba(175,203,255,0.2)]"
                  >
                    {link.icon ? (
                      isUrl(link.icon) ? (
                        <img src={link.icon} alt="" className="h-[18px] w-[18px] object-contain rounded-sm" />
                      ) : Icon ? (
                        <Icon size={18} weight="fill" />
                      ) : null
                    ) : null}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </FadeUp>
  );
}
