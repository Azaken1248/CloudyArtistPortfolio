import type { ApiPortfolioResponse } from './apiTypes'
import type { PortfolioData } from './types'

const NAV_ID_MAP: Record<string, string> = {
  commissions: 'commission',
}

function normalizeNavId(id: string): string {
  return NAV_ID_MAP[id] ?? id
}

/**
 * Field this mapper depends on. Every access below is unguarded, so one missing
 * nested value throws a TypeError that `usePortfolioFetch` catches — silently
 * reverting the whole site to hardcoded defaults with only a console warning.
 * Checking first means the failure names what was wrong instead.
 */
const REQUIRED_SECTIONS: string[] = [
  'siteConfig',
  'heroContent',
  'gallerySection',
  'commissions',
  'faqPage',
  'contactContent',
  'footerContent',
]

function assertShape(raw: unknown): asserts raw is ApiPortfolioResponse['data'] {
  if (!raw || typeof raw !== 'object') {
    throw new Error('Portfolio API returned no data object')
  }

  const data = raw as Record<string, unknown>
  const missing = REQUIRED_SECTIONS.filter((key) => !data[key])

  if (missing.length > 0) {
    throw new Error(`Portfolio API response is missing: ${missing.join(', ')}`)
  }

  if (!data.commissions || typeof data.commissions !== 'object'
      || !(data.commissions as Record<string, unknown>).section) {
    throw new Error('Portfolio API response is missing: commissions.section')
  }

  if (!data.faqPage || typeof data.faqPage !== 'object'
      || !(data.faqPage as Record<string, unknown>).section) {
    throw new Error('Portfolio API response is missing: faqPage.section')
  }

  if (!data.contactContent || typeof data.contactContent !== 'object') return
  const contact = data.contactContent as Record<string, unknown>
  if (!contact.section || !contact.infoCard || !contact.form) {
    throw new Error('Portfolio API response is missing part of contactContent')
  }
}

export function mapApiToPortfolio(
  raw: ApiPortfolioResponse['data']
): PortfolioData {
  assertShape(raw)

  return {
    site: {
      siteName: raw.siteConfig.siteName,
      siteSubtitle: raw.siteConfig.siteSubtitle,
      pageTitle: raw.siteConfig.pageTitle,
      metaDescription: raw.siteConfig.metaDescription,
      logoIcon: raw.siteConfig.logoIcon,
    },

    nav: (raw.nav ?? []).map((item) => ({
      id: normalizeNavId(item.id),
      label: item.label,
      icon: item.icon,
    })),

    // Absent on portfolios saved before header links existed, so default to
    // empty rather than treating it as a malformed payload.
    navLinks: (raw.navLinks ?? []).map((l) => ({
      label: l.label,
      url: l.url,
      icon: l.icon,
    })),

    socials: (raw.socials ?? []).map((s) => ({
      platform: s.platform,
      url: s.url,
      label: s.label,
      icon: s.icon,
    })),

    hero: {
      pillIcon: raw.heroContent.pillIcon,
      pillLabel: raw.heroContent.pillLabel,
      eyebrow: raw.heroContent.eyebrow,
      headline: raw.heroContent.headline,
      body: raw.heroContent.body,
      accent: raw.heroContent.accent,
      image: raw.heroContent.image,
      imageAlt: raw.heroContent.imageAlt,
      statusPillLabel: raw.heroContent.statusPillLabel,
      ctaButtons: (raw.heroContent.ctaButtons ?? []).map((cta) => ({
        label: cta.label,
        href: cta.href,
        variant: cta.variant,
        icon: cta.icon,
      })),
    },

    gallery: {
      eyebrow: raw.gallerySection.eyebrow,
      title: raw.gallerySection.title,
      description: raw.gallerySection.description,
    },

    artworks: (raw.artworks ?? []).map((a) => ({
      title: a.title,
      category: a.category,
      description: a.description,
      image: a.imageUrl,
      alt: a.altText,
    })),

    commissions: {
      section: {
        eyebrow: raw.commissions.section.eyebrow,
        title: raw.commissions.section.title,
        description: raw.commissions.section.description,
      },
      featured: raw.commissions.featured
        ? {
            tag: raw.commissions.featured.tag,
            badge: raw.commissions.featured.badge,
            title: raw.commissions.featured.title,
            description: raw.commissions.featured.description,
            highlights: raw.commissions.featured.highlights,
          }
        : undefined,
      tiers: (raw.commissionTiers ?? []).map((t) => ({
        name: t.name,
        priceLabel: t.priceLabel,
        detailTag: t.detailTag,
        description: t.description,
      })),
    },

    faqPage: {
      section: {
        eyebrow: raw.faqPage.section.eyebrow,
        title: raw.faqPage.section.title,
        description: raw.faqPage.section.description,
      },
      faqHeading: raw.faqPage.faqHeading,
      tosHeading: raw.faqPage.tosHeading,
      tosAcceptanceText: raw.faqPage.tosAcceptanceText,
    },

    faqs: (raw.faqItems ?? []).map((f) => ({
      question: f.question,
      answer: f.answer,
    })),

    tosSections: (raw.tosSections ?? []).map((s) => ({
      heading: s.heading,
      variant: s.variant,
      points: [...s.points],
    })),

    contact: {
      section: {
        eyebrow: raw.contactContent.section.eyebrow,
        title: raw.contactContent.section.title,
        description: raw.contactContent.section.description,
      },
      infoCard: {
        tag: raw.contactContent.infoCard.tag,
        title: raw.contactContent.infoCard.title,
        description: raw.contactContent.infoCard.description,
        notes: [...(raw.contactContent.infoCard.notes ?? [])],
      },
      form: {
        fields: (raw.contactContent.form.fields ?? []).map((f) => ({
          name: f.name,
          label: f.label,
          type: f.type,
          placeholder: f.placeholder,
          ...(f.rows !== undefined ? { rows: f.rows } : {}),
          ...(f.options !== undefined ? { options: f.options } : {}),
        })),
        submitLabel: raw.contactContent.form.submitLabel,
        submitIcon: raw.contactContent.form.submitIcon,
        disclaimer: raw.contactContent.form.disclaimer,
        actionUrl: raw.contactContent.form.actionUrl,
      },
    },

    footer: {
      copyright: raw.footerContent.copyright,
      tagline: raw.footerContent.tagline,
    },
  }
}
