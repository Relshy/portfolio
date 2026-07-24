import Link from "next/link"
import React from "react"
import styled from "styled-components"

const CardBody = styled.span<{ $withArrow?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 14px ${(props) => (props.$withArrow ? "56px" : "20px")} 14px 20px;
  min-width: 0;
`

const CardTitle = styled.span`
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
  column-gap: 10px;
  font-size: 1.35rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardScope = styled.span`
  color: var(--grey);
`

const CardName = styled.span`
  color: var(--white);
  font-weight: 400;
`

const CardVersion = styled.span<{ $highlight?: boolean }>`
  color: ${(props) => (props.$highlight ? "var(--gold)" : "var(--grey)")};
  font-weight: ${(props) => (props.$highlight ? 700 : 400)};
`

const CardDesc = styled.span`
  font-size: 0.9rem;
  color: var(--white);
  opacity: 0.92;
`

const CardArrow = styled.span`
  position: absolute;
  right: 24px;
  top: 50%;
  width: 28px;
  height: 28px;
  border: 0 solid #fff;
  border-right-width: 4px;
  border-top-width: 4px;
  transform: translateY(-50%) rotate(45deg);
  transition: right 120ms ease;
`

const PopularFlag = styled.span`
  position: absolute;
  top: -14px;
  left: 18px;
  background: var(--gold);
  color: var(--ink);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 10px;
  border-radius: 5px;
`

const sharedCardStyles = `
  display: flex;
  align-items: center;
  background: var(--ink);
  color: white;
  border-radius: var(--pill-radius);
  overflow: hidden;
  letter-spacing: -0.4px;
  min-height: 64px;
  position: relative;
`

const StaticCard = styled.div<{ $popular?: boolean }>`
  ${sharedCardStyles}
  ${(props) => (props.$popular ? "outline: 3px solid var(--gold);" : "")}
`

const LinkCard = styled(Link)`
  ${sharedCardStyles}
  transition: transform 120ms ease, background 120ms ease;

  &:hover {
    background: var(--ink-soft);
    color: white;
    transform: translateX(4px);
  }

  &:hover ${CardArrow} {
    right: 20px;
  }
`

export default function Card({
  scope,
  name,
  version,
  description,
  href,
  popular,
}: {
  scope?: string
  name: string
  version?: string
  description?: string
  href?: string
  popular?: boolean
}) {
  if (href) {
    return (
      <LinkCard href={href}>
        <CardBody $withArrow>
          <CardTitle>
            {scope && <CardScope>{scope}</CardScope>}
            <CardName>{name}</CardName>
            {version && (
              <CardVersion $highlight={popular}>{version}</CardVersion>
            )}
          </CardTitle>
          {description && <CardDesc>{description}</CardDesc>}
        </CardBody>
        <CardArrow />
      </LinkCard>
    )
  }

  return (
    <StaticCard $popular={popular}>
      {popular && <PopularFlag>most popular</PopularFlag>}
      <CardBody>
        <CardTitle>
          {scope && <CardScope>{scope}</CardScope>}
          <CardName>{name}</CardName>
          {version && <CardVersion $highlight={popular}>{version}</CardVersion>}
        </CardTitle>
        {description && <CardDesc>{description}</CardDesc>}
      </CardBody>
    </StaticCard>
  )
}
