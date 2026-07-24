import React from "react"
import styled, { css } from "styled-components"
import { breakMobile, isMobileSmall } from "../breakpoints"
import { Heading } from "./Typography"

type ColorVariation = "light" | "dark" | "red"
type PlacementVariation = "inline" | "floating"

interface StyledSectionProps {
  $variation: ColorVariation
  $placement: PlacementVariation
}

const themes = {
  dark: css`
    color: white;
    background: var(--ink);
  `,
  light: css`
    color: var(--ink);
    background: var(--white);
  `,
  red: css`
    color: white;
    background: var(--red);

    a {
      color: white;
      border-bottom: 1px dotted white;

      &:hover {
        color: var(--gold);
        border-bottom: 1px solid var(--gold);
      }
    }
  `,
} as const

const floatingStyles = css`
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
  border-radius: var(--radius-small) var(--radius-small) var(--radius-large)
    var(--radius-small);
`

const StyledSection = styled.section<StyledSectionProps>`
  position: relative;
  flex-grow: 1;
  ${(props) => themes[props.$variation]}
  ${(props) => (props.$placement === "floating" ? floatingStyles : "")}
`

const ContentWrapper = styled.div`
  padding: 2.8rem 2rem;

  @media screen and (${isMobileSmall}) {
    padding: 2rem 1rem;
  }
`

const InnerContent = styled.article<{ narrow: boolean | undefined }>`
  max-width: ${(props) =>
    props.narrow ? `${breakMobile}px` : "var(--content-width)"};
  margin: 0 auto;

  ${Heading} {
    margin-bottom: 1rem;
  }

  ${Heading}:not(:first-child) {
    margin-top: 2rem;
  }

  & img {
    max-width: 100%;
  }
`

export default function ContentSection({
  children,
  variation = "light",
  placement = "inline",
  narrow,
}: {
  children: React.ReactNode
  variation?: ColorVariation
  placement?: PlacementVariation
  narrow?: boolean
}) {
  return (
    <StyledSection $variation={variation} $placement={placement}>
      <ContentWrapper>
        <InnerContent narrow={narrow}>{children}</InnerContent>
      </ContentWrapper>
    </StyledSection>
  )
}
