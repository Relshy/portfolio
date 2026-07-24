"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense, useState } from "react"
import styled from "styled-components"
import { site } from "@/data/site"
import { isMobile } from "../breakpoints"
import Icon from "./Icon"
import SearchStrip from "./SearchStrip"
import SocialLinks from "./SocialLinks"

const StyledHeader = styled.header`
  background-color: var(--white);
  position: relative;
  z-index: 3;
`

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 14px 30px 10px;

  @media screen and (${isMobile}) {
    padding: 12px 20px 10px;
    flex-wrap: wrap;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--ink);

  &:hover {
    color: var(--ink);
  }

  &:hover img {
    transform: scale(1.05);
  }
`

const LogoAvatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--red);
  transition: transform 150ms ease;

  @media screen and (${isMobile}) {
    width: 64px !important;
    height: 64px !important;
  }
`

const LogoName = styled.span`
  font-family: var(--font-logo), sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 0.3px;
  color: var(--red);

  @media screen and (${isMobile}) {
    font-size: 2.1rem;
  }
`

const StyledNav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  font-weight: 900;
  margin-left: auto;

  & > * {
    padding: 0 1rem;
  }

  & > a {
    position: relative;
    padding: 1.9rem 0.65rem 1.55rem 0.65rem;
    letter-spacing: 0.3px;
    font-size: 1.15rem;
    text-align: center;
    color: var(--ink);
    border-bottom: 4px solid transparent;

    &:hover {
      color: var(--red);
    }

    &.active {
      color: var(--red);
    }
  }

  @media screen and (${isMobile}) {
    display: ${(props) => (props.$open ? "flex" : "none")};
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    box-shadow: 0 12px 24px rgba(79, 60, 66, 0.15);
    padding: 6px 0;
    margin-left: 0;

    & > a {
      padding: 14px 24px;
      text-align: left;
    }
  }
`

const StyledSocialLinks = styled(SocialLinks)`
  align-self: center;

  @media screen and (${isMobile}) {
    padding: 14px 24px 6px;
  }
`

const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--red);
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  order: -1;

  @media screen and (${isMobile}) {
    display: flex;
  }
`

const links = [
  ["Work", "/work"],
  ["Commissions", "/commissions"],
  ["Videos", "/videos"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledHeader>
        <InnerHeader>
          <HamburgerButton
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon icon={open ? "close" : "hamburger"} />
          </HamburgerButton>

          <LogoLink href="/">
            <LogoAvatar
              src="/assets/images/avatar.jpg"
              alt={site.name}
              width={88}
              height={88}
            />
            <LogoName>{site.name}</LogoName>
          </LogoLink>

          <StyledNav $open={open} onClick={() => setOpen(false)}>
            {links.map(([text, url]) => (
              <Link
                href={url}
                key={url}
                className={pathname === url ? "active" : undefined}
                aria-current={pathname === url ? "page" : undefined}
              >
                {text}
              </Link>
            ))}
            <StyledSocialLinks />
          </StyledNav>
        </InnerHeader>
      </StyledHeader>
      <Suspense fallback={null}>
        <SearchStrip />
      </Suspense>
    </>
  )
}
