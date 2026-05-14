import {
  ArrowRightIcon,
  CloudIcon,
  EnvelopeSimpleIcon,
  HouseIcon,
  ImageIcon,
  InstagramLogoIcon,
  PaletteIcon,
  QuestionIcon,
  TiktokLogoIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
  LinkSimpleIcon,
  type Icon,
} from '@phosphor-icons/react'

const registry: Record<string, Icon> = {
  House: HouseIcon,
  Image: ImageIcon,
  Palette: PaletteIcon,
  Question: QuestionIcon,
  EnvelopeSimple: EnvelopeSimpleIcon,
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
