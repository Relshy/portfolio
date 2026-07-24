import styled, { css } from "styled-components"
import { site } from "@/data/site"
import { IconsId } from "@/types/icons"
import Icon from "./Icon"

const socialLinks: [IconsId, string, string][] = [
  ["github", site.github, "GitHub"],
  ["discord", site.discord, `Discord — ${site.discordHandle}`],
  ["email", `mailto:${site.email}`, "Email"],
]

type ColorVariation = "light"

const variations = {
  light: css`
    color: white;
  `,
}

const StyledSocialLinks = styled.div<{ $variation?: ColorVariation }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;

  a {
    display: inline-flex;
    padding: 0.6rem 0.45rem 0 0.5rem;
  }

  a:hover {
    color: var(--red);
  }

  ${(props) => props.$variation && variations[props.$variation]}
`

export default function SocialLinks({
  variation,
  className,
}: {
  variation?: ColorVariation
  className?: string
}) {
  return (
    <StyledSocialLinks className={className} $variation={variation}>
      {socialLinks.map(([icon, url, label]) => (
        <a
          href={url}
          key={icon}
          target={url.startsWith("mailto:") ? undefined : "_blank"}
          rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          title={label}
        >
          <Icon icon={icon} />
        </a>
      ))}
    </StyledSocialLinks>
  )
}
