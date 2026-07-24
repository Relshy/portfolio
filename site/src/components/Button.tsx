import Link from "next/link"
import styled, { css } from "styled-components"

const buttonStyles = css`
  display: inline-block;
  padding: 0.7rem 1.6rem;
  background: var(--clay);
  border-radius: var(--radius-small);
  color: var(--white);
  margin: 0.5rem 0;
  text-transform: uppercase;
  border: 1px solid var(--clay);
  font-weight: 700;
  font-size: 1.2rem;
  transition:
    background 120ms ease,
    transform 120ms ease;

  &:hover {
    background: var(--clay-deep);
    border-color: var(--clay-deep);
    color: var(--white);
    transform: translateY(-2px);
  }
`

export const Button = styled.button`
  ${buttonStyles}
`

const ButtonLinkInternal = styled(Link)`
  ${buttonStyles}
`
const ButtonLinkExternal = styled.a`
  ${buttonStyles}
`

export function ButtonLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  if (to.match(/^[a-z]+:/)) {
    return (
      <ButtonLinkExternal href={to} target="_blank" rel="noopener">
        {children}
      </ButtonLinkExternal>
    )
  } else {
    return <ButtonLinkInternal href={to}>{children}</ButtonLinkInternal>
  }
}
