import {
  ArrowRightIcon,
  ChatCircleTextIcon,
  CloudIcon,
  EnvelopeIcon,
  EnvelopeSimpleIcon,
  HouseIcon,
  ImageIcon,
  InstagramLogoIcon,
  LinkSimpleIcon,
  PaletteIcon,
  QuestionIcon,
  TiktokLogoIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
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
}


export function resolveIcon(name: string | undefined): Icon | undefined {
  if (!name) return undefined
  return registry[name]
}
