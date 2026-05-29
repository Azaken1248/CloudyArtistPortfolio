export type SiteConfig = {
  siteName: string
  siteSubtitle: string
  pageTitle: string
  metaDescription: string
  logoIcon: string
}

export type SocialLink = {
  platform: string
  url: string
  label: string
  icon: string
}

export type NavItem = {
  id: string
  label: string
  icon: string
}

export type CtaButton = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
  icon?: string
}

export type HeroContent = {
  pillIcon: string
  pillLabel: string
  eyebrow: string
  headline: string
  body: string
  accent: string
  image: string
  imageAlt: string
  statusPillLabel: string
  ctaButtons: CtaButton[]
}

export type SectionContent = {
  eyebrow: string
  title: string
  description: string
}

export type ArtworkItem = {
  title: string
  category: string
  description: string
  image: string
  alt: string
}

export type CommissionFeatured = {
  tag: string
  badge: string
  title: string
  description: string
  highlights: string[]
}

export type CommissionTier = {
  name: string
  priceLabel: string
  detailTag: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type TosSection = {
  heading: string
  variant: 'default' | 'prohibited' | 'info'
  points: string[]
}

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'select'
  placeholder: string
  rows?: number
  options?: string[]
}

export type ContactContent = {
  section: SectionContent
  infoCard: {
    tag: string
    title: string
    description: string
    notes: string[]
  }
  form: {
    fields: FormField[]
    submitLabel: string
    submitIcon?: string
    disclaimer: string
    actionUrl?: string
  }
}

export type FaqPageContent = {
  section: SectionContent
  faqHeading: string
  tosHeading: string
  tosAcceptanceText: string
}

export type FooterContent = {
  copyright: string
  tagline: string
}

export type PortfolioData = {
  site: SiteConfig
  nav: NavItem[]
  hero: HeroContent
  gallery: SectionContent
  artworks: ArtworkItem[]
  commissions: {
    section: SectionContent
    featured?: CommissionFeatured
    tiers: CommissionTier[]
  }
  faqPage: FaqPageContent
  faqs: FaqItem[]
  tosSections: TosSection[]
  contact: ContactContent
  footer: FooterContent
  socials: SocialLink[]
}
