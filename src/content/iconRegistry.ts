import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArticleIcon,
  BookOpenIcon,
  CalendarBlankIcon,
  CameraIcon,
  CaretDownIcon,
  ChatCircleTextIcon,
  CheckIcon,
  ClockIcon,
  CloudIcon,
  CrownIcon,
  DiamondIcon,
  DiscordLogoIcon,
  EnvelopeIcon,
  EnvelopeSimpleIcon,
  EyeIcon,
  FireIcon,
  GearIcon,
  GiftIcon,
  GithubLogoIcon,
  GlobeIcon,
  HandshakeIcon,
  HeartIcon,
  HouseIcon,
  ImageIcon,
  InfoIcon,
  InstagramLogoIcon,
  LightningIcon,
  LinkSimpleIcon,
  LinkedinLogoIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MoneyIcon,
  MusicNoteIcon,
  PaintBrushIcon,
  PaletteIcon,
  PencilSimpleIcon,
  PlusIcon,
  QuestionIcon,
  ShieldCheckIcon,
  SmileyIcon,
  SparkleIcon,
  StarIcon,
  TagIcon,
  TiktokLogoIcon,
  TwitterLogoIcon,
  TwitchLogoIcon,
  UserIcon,
  WarningIcon,
  XIcon,
  YoutubeLogoIcon,
  type Icon,
} from '@phosphor-icons/react'

const registry: Record<string, Icon> = {
  House: HouseIcon,
  Image: ImageIcon,
  Palette: PaletteIcon,
  Question: QuestionIcon,
  EnvelopeSimple: EnvelopeSimpleIcon,
  Envelope: EnvelopeIcon,
  ChatCircleText: ChatCircleTextIcon,
  Cloud: CloudIcon,
  ArrowRight: ArrowRightIcon,
  InstagramLogo: InstagramLogoIcon,
  TiktokLogo: TiktokLogoIcon,
  DiscordLogo: DiscordLogoIcon,
  TwitterLogo: TwitterLogoIcon,
  YoutubeLogo: YoutubeLogoIcon,
  LinkSimple: LinkSimpleIcon,
  Gear: GearIcon,
  User: UserIcon,
  Star: StarIcon,
  Heart: HeartIcon,
  MagnifyingGlass: MagnifyingGlassIcon,
  GithubLogo: GithubLogoIcon,
  LinkedinLogo: LinkedinLogoIcon,
  TwitchLogo: TwitchLogoIcon,
  Globe: GlobeIcon,
  PaintBrush: PaintBrushIcon,
  PencilSimple: PencilSimpleIcon,
  Camera: CameraIcon,
  Sparkle: SparkleIcon,
  Diamond: DiamondIcon,
  Crown: CrownIcon,
  Lightning: LightningIcon,
  Fire: FireIcon,
  MusicNote: MusicNoteIcon,
  ArrowLeft: ArrowLeftIcon,
  CaretDown: CaretDownIcon,
  Check: CheckIcon,
  X: XIcon,
  Plus: PlusIcon,
  Info: InfoIcon,
  Warning: WarningIcon,
  Eye: EyeIcon,
  ShieldCheck: ShieldCheckIcon,
  Article: ArticleIcon,
  BookOpen: BookOpenIcon,
  Tag: TagIcon,
  CalendarBlank: CalendarBlankIcon,
  Clock: ClockIcon,
  MapPin: MapPinIcon,
  Money: MoneyIcon,
  Gift: GiftIcon,
  Handshake: HandshakeIcon,
  Smiley: SmileyIcon,
}

export function resolveIcon(name: string | undefined): Icon | undefined {
  if (!name) return undefined
  return registry[name]
}

/**
 * True for values renderable as an <img src>.
 *
 * Plain `http://` is excluded: the site is served over HTTPS, so an http image
 * is blocked as mixed content and renders as a broken icon. Rejecting it here
 * falls back to the named-icon path instead.
 */
export function isUrl(v: string | undefined): boolean {
  return !!v && (v.startsWith('https://') || v.startsWith('data:image/') || v.startsWith('blob:'))
}

const SAFE_LINK_SCHEMES = ['http:', 'https:', 'mailto:']

/**
 * CTA hrefs come from the CMS. An in-page anchor is fine; anything else must be
 * a known scheme, so a `javascript:` URL saved into the CMS cannot execute for
 * visitors who click it.
 */
export function safeHref(href: string | undefined): string {
  if (!href) return '#'
  if (href.startsWith('#') || href.startsWith('/')) return href

  try {
    const url = new URL(href, window.location.origin)
    return SAFE_LINK_SCHEMES.includes(url.protocol) ? href : '#'
  } catch {
    return '#'
  }
}
