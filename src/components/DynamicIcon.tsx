import { resolveIcon, isUrl } from "../content/iconRegistry";

type DynamicIconProps = {
  /** Either a registry icon name, or a URL to a custom uploaded image. */
  name: string | undefined;
  size?: number;
  className?: string;
  weight?: "fill" | "regular" | "bold";
};

/**
 * Renders a CMS-configured icon.
 *
 * Call sites used to do `const Icon = resolveIcon(name)` and then render
 * `<Icon />`, which makes React see a component created during render — the
 * registry lookup returns a stable reference, but that is not visible to the
 * compiler or to lint. Resolving inside a real component keeps the element type
 * stable from React's point of view and puts the name/URL branch in one place.
 */
export function DynamicIcon({ name, size = 18, className, weight = "fill" }: DynamicIconProps) {
  if (!name) return null;

  if (isUrl(name)) {
    return (
      <img
        src={name}
        alt=""
        className={className}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    );
  }

  const Icon = resolveIcon(name);
  if (!Icon) return null;

  // The registry returns a stable module-level reference per name, so the
  // element type does not change between renders — but that is not visible to
  // the rule. Centralising the lookup here means this is the only place in the
  // codebase that needs the exemption.
  // eslint-disable-next-line react-hooks/static-components
  return <Icon size={size} weight={weight} className={className} />;
}
