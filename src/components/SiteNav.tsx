import {
  Cloud,
  EnvelopeSimple,
  House,
  Image as ImageIcon,
  Palette,
  Question,
} from "@phosphor-icons/react";
import type { NavItem } from "../content/portfolio";

type SiteNavProps = {
  items: NavItem[];
  activeId: string;
};

type NavIcon = typeof House;

const navIcons: Record<NavItem["id"], NavIcon> = {
  home: House,
  gallery: ImageIcon,
  commission: Palette,
  faq: Question,
  contact: EnvelopeSimple,
};

export function SiteNav({ items, activeId }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 group-hover:-translate-y-0.5">
              <Cloud size={20} weight="fill" />
            </span>
            <span>
              <span className="block font-display text-xl text-neutral">
                Cluwudy
              </span>
              <span className="block text-[11px] uppercase tracking-[0.35em] text-neutral/45">
                portfolio
              </span>
            </span>
          </a>

          <a
            href="#contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-neutral shadow-[0_14px_30px_rgba(175,203,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:inline-flex"
          >
            <EnvelopeSimple size={18} weight="fill" />
            Send message
          </a>
        </div>

        <nav className="mt-3 hidden items-center justify-center gap-2 rounded-full bg-secondary/45 p-1 ring-1 ring-neutral/10 md:flex">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:content-[''] after:transition-transform after:duration-300 ${
                  isActive
                    ? "bg-white text-neutral shadow-[0_10px_24px_rgba(77,93,122,0.08)] after:scale-x-100"
                    : "text-neutral/60 after:scale-x-0 hover:text-neutral hover:after:scale-x-100"
                }`}
              >
                {(() => {
                  const Icon = navIcons[item.id];

                  return <Icon size={17} weight="fill" />;
                })()}
                {item.label}
              </a>
            );
          })}
        </nav>

        <nav className="mt-3 md:hidden" aria-label="Primary navigation">
          <div className="-mx-4 flex items-stretch overflow-x-auto border-y border-secondary/70 bg-white/95 scrollbar-none backdrop-blur sm:-mx-6">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className={`flex h-12 shrink-0 items-center border-b-2 transition-all duration-300 ${
                    isActive
                      ? "min-w-40 flex-2 justify-start border-primary px-4 text-primary"
                      : "w-12 justify-center border-transparent bg-transparent text-neutral/70 hover:bg-secondary/20"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-base">
                    {(() => {
                      const Icon = navIcons[item.id];

                      return <Icon size={18} weight="fill" />;
                    })()}
                  </span>
                  <span
                    className={`whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
                      isActive
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
    </header>
  );
}
