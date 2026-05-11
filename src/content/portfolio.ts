import heroImageAsset from '../assets/gallary/cloudy_png_tuber_remake_1.png'
import cuteWaterGirl from '../assets/gallary/cuteWaterGirl.webp'
import fischlArt from '../assets/gallary/fischl.webp'
import rhythmGirl from '../assets/gallary/rhythmGirlpng.png'
import vampireArt from '../assets/gallary/Vampire.png'

export type NavItem = {
  id: string
  label: string
}

export type HeroStat = {
  label: string
  value: string
}

export type ArtworkItem = {
  title: string
  category: string
  description: string
  image: string
  alt: string
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

export const siteName = 'Cluwudy'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'gallery', label: 'Artwork' },
  { id: 'commission', label: 'Commissions' },
  { id: 'faq', label: 'FAQ & TOS' },
  { id: 'contact', label: 'Contact' },
]

export const heroHighlights = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor',
]

export const heroStats: HeroStat[] = [
  { label: 'Lorem ipsum', value: 'Dolor sit amet' },
  { label: 'Consectetur', value: 'Adipiscing elit' },
  { label: 'Sed do', value: 'Eiusmod tempor' },
]

export const artworkItems: ArtworkItem[] = [
  {
    title: 'Lorem ipsum',
    category: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: fischlArt,
    alt: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Dolor sit amet',
    category: 'Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: cuteWaterGirl,
    alt: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Consectetur adipiscing',
    category: 'Dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: heroImageAsset,
    alt: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Sed do eiusmod',
    category: 'Sit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: rhythmGirl,
    alt: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Tempor incididunt',
    category: 'Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: vampireArt,
    alt: 'Lorem ipsum dolor sit amet.',
  },
]

export const commissionTiers: CommissionTier[] = [
  {
    name: 'Lorem ipsum',
    priceLabel: 'Lorem ipsum',
    detailTag: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Dolor sit amet',
    priceLabel: 'Lorem ipsum',
    detailTag: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Consectetur adipiscing',
    priceLabel: 'Lorem ipsum',
    detailTag: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Sed do eiusmod',
    priceLabel: 'Lorem ipsum',
    detailTag: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Sed do eiusmod tempor?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const tosPoints = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
]

export const heroImage = heroImageAsset