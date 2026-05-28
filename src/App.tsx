import { useEffect, useState } from "react";
import { CommissionSection } from "./sections/CommissionSection";
import { ContactSection } from "./sections/ContactSection";
import { FaqSection } from "./sections/FaqSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { usePortfolio } from "./content/usePortfolio";

function App() {
  const { nav, site } = usePortfolio();
  const [activeSection, setActiveSection] = useState(nav[0].id);

  useEffect(() => {
    document.title = site.pageTitle;
  }, [site.pageTitle]);

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveSection = () => {
      // Bottom of page check to highlight the last section (e.g. Contact)
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalPageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= totalPageHeight - 32) {
        setActiveSection(nav[nav.length - 1].id);
        return;
      }

      // Find the section that occupies the most area of the viewport (excluding the header space)
      const viewportHeight = window.innerHeight;
      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;

      const viewportActiveTop = headerHeight;
      const viewportActiveBottom = viewportHeight;

      let bestSectionId = nav[0].id;
      let maxOverlap = -1;

      for (const item of nav) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const sectionTop = Math.max(rect.top, viewportActiveTop);
        const sectionBottom = Math.min(rect.bottom, viewportActiveBottom);
        const overlap = Math.max(0, sectionBottom - sectionTop);

        if (overlap > maxOverlap && overlap > 0) {
          maxOverlap = overlap;
          bestSectionId = item.id;
        }
      }

      setActiveSection(bestSectionId);
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
  }, [nav]);

  useEffect(() => {
    const syncActiveSectionToHash = () => {
      const nextSectionId = window.location.hash.replace(/^#/, "");

      if (!nextSectionId) {
        setActiveSection(nav[0].id);
        return;
      }

      if (nav.some((item) => item.id === nextSectionId)) {
        setActiveSection(nextSectionId);
      }
    };

    syncActiveSectionToHash();
    window.addEventListener("hashchange", syncActiveSectionToHash);

    return () =>
      window.removeEventListener("hashchange", syncActiveSectionToHash);
  }, [nav]);

  return (
    <div className="relative isolate min-h-screen bg-[radial-gradient(circle_at_14%_12%,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.88)_16%,transparent_36%),radial-gradient(circle_at_82%_16%,rgba(220,235,255,0.96)_0%,transparent_26%),radial-gradient(circle_at_50%_36%,rgba(175,203,255,0.48)_0%,transparent_30%),radial-gradient(circle_at_18%_78%,rgba(248,250,255,0.96)_0%,transparent_24%),radial-gradient(circle_at_84%_82%,rgba(220,235,255,0.88)_0%,transparent_26%),linear-gradient(180deg,#eef5ff_0%,#f8faff_40%,#eaf3ff_100%)] text-neutral">
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

      <SiteNav items={nav} activeId={activeSection} />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <GallerySection />
        <CommissionSection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
