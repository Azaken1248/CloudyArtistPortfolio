import heroImageAsset from '../assets/gallary/cloudy_pngtuber_art_2.png'
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

export type TosSection = {
  heading: string
  variant: 'default' | 'prohibited' | 'info'
  points: string[]
}

export const siteName = 'Cluwudy'

export const heroPillLabel = 'Original character spotlight'

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
    title: 'Fischl Fan Art',
    category: 'Fan Art',
    description:
      'A detailed fan art illustration of Fischl from Genshin Impact, featuring dynamic lighting and rich color palette.',
    image: fischlArt,
    alt: 'Fischl fan art illustration with detailed character design',
  },
  {
    title: 'Water Spirit',
    category: 'Original',
    description:
      'An original character design of a cute water-themed girl with flowing aquatic elements.',
    image: cuteWaterGirl,
    alt: 'Cute water girl original character illustration',
  },
  {
    title: 'Cloudy PNGTuber',
    category: 'VTuber',
    description:
      'A PNGTuber design remake featuring the Cloudy character with expressive poses and accessories.',
    image: heroImageAsset,
    alt: 'Cloudy PNGTuber character remake design',
  },
  {
    title: 'Rhythm Girl',
    category: 'Original',
    description:
      'An energetic original character design with a rhythm and music theme, featuring vibrant colors.',
    image: rhythmGirl,
    alt: 'Rhythm girl original character with music theme',
  },
  {
    title: 'Vampire Portrait',
    category: 'Original',
    description:
      'A stylish vampire character portrait with dark elegant aesthetics and detailed rendering.',
    image: vampireArt,
    alt: 'Elegant vampire character portrait illustration',
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
    question: 'How do I commission you?',
    answer:
      'You can reach out through the contact form on this site, or message me on Instagram, TikTok, or Discord. Please include references and details about what you want!',
  },
  {
    question: 'How long will my commission take?',
    answer:
      'I will start in 2 days to 2 weeks. Paintings will take more time since they are detailed. Please keep in mind I might have many commissions in my waitlist. Rush commissions are available with a +100% fee.',
  },
  {
    question: 'Can I use the artwork for streaming?',
    answer:
      'Personal use as a commissioner includes Twitch, YouTube, or any streaming platforms. Commercial usage is automatically included for VTuber commissions. For other commercial uses, additional rights must be purchased.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'I do not offer refunds unless I cannot finish your commission. If I cannot complete it, you will be fully refunded. However, if I have to refund for any other reason, you will be permanently blacklisted.',
  },
  {
    question: 'Can I request changes to the art style?',
    answer:
      'Commissioners must respect my art style — I will not amend the color palette or line-art style to copy another artist. Minor revisions within my style are welcome during the process.',
  },
]

export const tosSections: TosSection[] = [
  {
    heading: 'General Terms',
    variant: 'default',
    points: [
      'Commissioning me means you have read and accepted the TOS.',
      'I have the right to decline any commission for any reason.',
      'I maintain the copyright for all my artwork and can use it on portfolios/projects displaying my work. I will use it as my pfp for a short time, post it on my socials, etc. A small fee might apply for NDA.',
      'Commercial usage is automatically included for VTuber Commissions.',
      'The commissioner is free to use it for personal purposes and repost the artwork anywhere as long as credit is given. Use as social media icon, decoration, etc. It includes Twitch, YouTube or any streaming platforms as personal use.',
      'Commissioner must respect my art style, meaning they will not ask to amend the color palette and the style of line-art. I will not copy any other artist\'s art style.',
      'Prices may increase without notice. Customers who purchased a commission before the price change are not affected.',
    ],
  },
  {
    heading: 'You Are NOT Allowed To',
    variant: 'prohibited',
    points: [
      'Take credit for the artwork.',
      'Trace or change the artwork without permission.',
      'Remove my signature from the artwork.',
      'Sell the artwork.',
      'Use it for AI learning, generation, or sampling.',
      'Use it for NFT or blockchain purposes.',
      'Resell or use the artwork for redistribution and external projects, commercial or non-commercial (i.e. t-shirts, mugs, public flyers, etc.) unless previously agreed on.',
    ],
  },
  {
    heading: 'Refund Policy',
    variant: 'default',
    points: [
      'I DO NOT offer refunds unless I cannot finish your commission. Please do not assume I cannot finish your commission.',
      'If I cannot do your commission, you will be fully refunded.',
      'If I have to refund for any other reason, you will be permanently blacklisted.',
    ],
  },
  {
    heading: 'Commercial Rights',
    variant: 'info',
    points: [
      'Once commercial rights have been purchased, they are bound only to the purchaser.',
      'The purchaser is free to make profits of any scale.',
      'Commercial rights do NOT include NFTs and AI usage — even with commercial usage purchased.',
    ],
  },
  {
    heading: 'Deadlines & Delivery',
    variant: 'info',
    points: [
      'I will start in 2 days to 2 weeks. Paintings will take more time since they are detailed.',
      'Do not rush me — keep in mind that I might have many commissions in my waitlist.',
      'You can order a rush commission with +100% fee. It will bump your order.',
    ],
  },
  {
    heading: 'Usage',
    variant: 'default',
    points: [
      'Only personal use if commercial rights were not purchased — which means you cannot use my artwork on streaming platforms, as merch, etc.',
    ],
  },
  {
    heading: 'Communication',
    variant: 'info',
    points: [
      'I will contact you via email if you don\'t provide any socials.',
      'I mostly use Instagram, TikTok, and Discord.',
    ],
  },
]

export const tosPoints = tosSections.flatMap((s) => s.points)

export const heroImage = heroImageAsset