import heroImageAsset from '../assets/gallary/cloudy_pngtuber_art_2.png'
import cloudyRemake from '../assets/gallary/cloudy_png_tuber_remake_1.png'
import cuteWaterGirl from '../assets/gallary/cuteWaterGirl.webp'
import fischlArt from '../assets/gallary/fischl.webp'
import rhythmGirl from '../assets/gallary/rhythmGirlpng.png'
import vampireArt from '../assets/gallary/Vampire.png'

import type { PortfolioData } from './types'

export const defaultPortfolio: PortfolioData = {
  // ── Site config ──────────────────────────────────────
  site: {
    siteName: 'Cluwudy',
    siteSubtitle: 'portfolio',
    pageTitle: 'Cluwudy — Artist Portfolio',
    metaDescription: 'Original character art, commissions, and VTuber designs by Cluwudy.',
    logoIcon: 'Cloud',
  },

  // ── Social links ─────────────────────────────────────
  socials: [
    { platform: 'instagram', url: 'https://instagram.com/', label: 'Instagram', icon: 'InstagramLogo' },
    { platform: 'tiktok', url: 'https://tiktok.com/', label: 'TikTok', icon: 'TiktokLogo' },
    { platform: 'discord', url: 'https://discord.gg/', label: 'Discord', icon: 'DiscordLogo' },
  ],

  // ── Navigation ───────────────────────────────────────
  nav: [
    { id: 'home', label: 'Home', icon: 'House' },
    { id: 'gallery', label: 'Artwork', icon: 'Image' },
    { id: 'commission', label: 'Commissions', icon: 'Palette' },
    { id: 'faq', label: 'FAQ & TOS', icon: 'Question' },
    { id: 'contact', label: 'Contact', icon: 'EnvelopeSimple' },
  ],

  // ── Hero ─────────────────────────────────────────────
  hero: {
    pillIcon: 'Palette',
    pillLabel: 'Original character introduction',
    eyebrow: 'Cluwudy',
    headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    accent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: heroImageAsset,
    imageAlt: 'Cloudy PNGTuber character',
    statusPillLabel: 'Original character spotlight',
    ctaButtons: [
      { label: 'View artwork', href: '#gallery', variant: 'primary', icon: 'Image' },
      { label: 'Request commission', href: '#contact', variant: 'secondary', icon: 'EnvelopeSimple' },
    ],
  },

  // ── Gallery ──────────────────────────────────────────
  gallery: {
    eyebrow: 'Artwork gallery',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  artworks: [
    {
      title: 'Fischl Fan Art',
      category: 'Fan Art',
      description: 'A detailed fan art illustration of Fischl from Genshin Impact, featuring dynamic lighting and rich color palette.',
      image: fischlArt,
      alt: 'Fischl fan art illustration with detailed character design',
    },
    {
      title: 'Water Spirit',
      category: 'Original',
      description: 'An original character design of a cute water-themed girl with flowing aquatic elements.',
      image: cuteWaterGirl,
      alt: 'Cute water girl original character illustration',
    },
    {
      title: 'Cloudy PNGTuber',
      category: 'VTuber',
      description: 'A PNGTuber design featuring the Cloudy character with expressive poses and accessories.',
      image: heroImageAsset,
      alt: 'Cloudy PNGTuber character design',
    },
    {
      title: 'Cloudy PNGTuber Remake',
      category: 'VTuber',
      description: 'A PNGTuber remake of the Cloudy character with refined details and updated design.',
      image: cloudyRemake,
      alt: 'Cloudy PNGTuber character remake design',
    },
    {
      title: 'Rhythm Girl',
      category: 'Original',
      description: 'An energetic original character design with a rhythm and music theme, featuring vibrant colors.',
      image: rhythmGirl,
      alt: 'Rhythm girl original character with music theme',
    },
    {
      title: 'Vampire Portrait',
      category: 'Original',
      description: 'A stylish vampire character portrait with dark elegant aesthetics and detailed rendering.',
      image: vampireArt,
      alt: 'Elegant vampire character portrait illustration',
    },
  ],

  // ── Commissions ──────────────────────────────────────
  commissions: {
    section: {
      eyebrow: 'Commissions',
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    featured: {
      tag: 'Lorem ipsum',
      badge: 'Lorem ipsum dolor',
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      ],
    },
    tiers: [
      {
        name: 'Lorem ipsum',
        priceLabel: 'Lorem ipsum',
        detailTag: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Dolor sit amet',
        priceLabel: 'Lorem ipsum',
        detailTag: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Consectetur adipiscing',
        priceLabel: 'Lorem ipsum',
        detailTag: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Sed do eiusmod',
        priceLabel: 'Lorem ipsum',
        detailTag: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },

  // ── FAQ & TOS ────────────────────────────────────────
  faqPage: {
    section: {
      eyebrow: 'FAQ & TOS',
      title: 'Questions & terms of service.',
      description: 'Everything you need to know before commissioning. Please read the terms carefully — commissioning me means you accept them.',
    },
    faqHeading: 'Common questions',
    tosHeading: 'Terms of service',
    tosAcceptanceText: 'Commissioning me means you have read and accepted the TOS.',
  },

  faqs: [
    {
      question: 'How do I commission you?',
      answer: 'You can reach out through the contact form on this site, or message me on Instagram, TikTok, or Discord. Please include references and details about what you want!',
    },
    {
      question: 'How long will my commission take?',
      answer: 'I will start in 2 days to 2 weeks. Paintings will take more time since they are detailed. Please keep in mind I might have many commissions in my waitlist. Rush commissions are available with a +100% fee.',
    },
    {
      question: 'Can I use the artwork for streaming?',
      answer: 'Personal use as a commissioner includes Twitch, YouTube, or any streaming platforms. Commercial usage is automatically included for VTuber commissions. For other commercial uses, additional rights must be purchased.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'I do not offer refunds unless I cannot finish your commission. If I cannot complete it, you will be fully refunded. However, if I have to refund for any other reason, you will be permanently blacklisted.',
    },
    {
      question: 'Can I request changes to the art style?',
      answer: 'Commissioners must respect my art style — I will not amend the color palette or line-art style to copy another artist. Minor revisions within my style are welcome during the process.',
    },
  ],

  tosSections: [
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
  ],

  // ── Contact ──────────────────────────────────────────
  contact: {
    section: {
      eyebrow: 'Contact',
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    infoCard: {
      tag: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      notes: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
      ],
    },
    form: {
      fields: [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' },
        { name: 'discordId', label: 'Discord ID', type: 'text', placeholder: 'e.g. username' },
        { name: 'preferredContact', label: 'Preferred Contact Method', type: 'select', placeholder: 'Select...', options: ['Either', 'Email', 'Discord'] },
        { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject of inquiry' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Describe your request...', rows: 6 },
      ],
      submitLabel: 'Send message',
      submitIcon: 'ArrowRight',
      disclaimer: 'Please provide at least one contact method (email or Discord) so the artist can reply to you.',
    },
  },

  // ── Footer ───────────────────────────────────────────
  footer: {
    copyright: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tagline: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}