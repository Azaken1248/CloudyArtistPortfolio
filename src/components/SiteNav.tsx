import { EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { resolveIcon, isUrl } from "../content/iconRegistry";
import type { NavItem } from "../content/types";
import { usePortfolio } from "../content/usePortfolio";

type SiteNavProps = {
  items: NavItem[];
  activeId: string;
};

export function SiteNav({ items, activeId }: SiteNavProps) {
  const { site } = usePortfolio();
  const LogoIcon = resolveIcon(site.logoIcon);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-secondary/70 bg-white/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 group-hover:-translate-y-0.5 overflow-hidden">
              {site.logoIcon ? (
                isUrl(site.logoIcon) ? (
                  <img src={site.logoIcon} alt="" className="h-full w-full object-cover" />
                ) : LogoIcon ? (
                  <LogoIcon size={20} weight="fill" />
                ) : null
              ) : null}
            </span>
            <span>
              <span className="block font-display text-xl text-neutral">
                {site.siteName}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.35em] text-neutral/45">
                {site.siteSubtitle}
              </span>
            </span>
          </a>

          <a
            href="#contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:inline-flex"
          >
            <EnvelopeSimpleIcon size={18} weight="fill" />
            Send message
          </a>
        </div>

        <nav className="mt-3 hidden items-center justify-center gap-2 rounded-full bg-secondary/45 p-1 ring-1 ring-neutral/10 md:flex">
          {items.map((item) => {
            const isActive = item.id === activeId;
            const Icon = resolveIcon(item.icon);

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:content-[''] after:transition-transform after:duration-300 ${isActive
                  ? "bg-white text-neutral shadow-[0_10px_24px_rgba(77,93,122,0.08)] after:scale-x-100"
                  : "text-neutral/60 after:scale-x-0 hover:text-neutral hover:after:scale-x-100"
                  }`}
              >
                {item.icon ? (
                  isUrl(item.icon) ? (
                    <img src={item.icon} alt="" className="h-[17px] w-[17px] object-contain rounded-sm" />
                  ) : Icon ? (
                    <Icon size={17} weight="fill" />
                  ) : null
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <nav className="mt-3 md:hidden" aria-label="Primary navigation">
          <div className="-mx-4 flex items-stretch overflow-x-auto border-y border-secondary/70 bg-white/95 scrollbar-none backdrop-blur sm:-mx-6">
            {items.map((item) => {
              const isActive = item.id === activeId;
              const Icon = resolveIcon(item.icon);

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className={`flex h-12 shrink-0 items-center border-b-2 transition-all duration-300 ${isActive
                    ? "min-w-40 flex-2 justify-start border-primary px-4 text-primary"
                    : "w-12 justify-center border-transparent bg-transparent text-neutral/70 hover:bg-secondary/20"
                    }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-base">
                    {item.icon ? (
                      isUrl(item.icon) ? (
                        <img src={item.icon} alt="" className="h-[18px] w-[18px] object-contain rounded-sm" />
                      ) : Icon ? (
                        <Icon size={18} weight="fill" />
                      ) : null
                    ) : null}
                  </span>
                  <span
                    className={`whitespace-nowrap text-sm font-semibold transition-all duration-300 ${isActive
                      ? "ml-2 max-w-28 opacity-100"
                      : "max-w-0 opacity-0"
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
