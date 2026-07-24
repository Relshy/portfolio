import Link from "next/link"
import styled from "styled-components"
import { site } from "@/data/site"

const StyledFooter = styled.footer`
  background: var(--red);
  padding: 0.75rem 1.5rem;
  color: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px 20px;
`

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > a {
    position: relative;
    padding: 0 0.65rem;
    letter-spacing: 0.3px;
    font-size: 1.1rem;
    font-weight: 900;
    color: white;

    &:hover {
      color: var(--ink);
    }
  }
`

const CopyrightLine = styled.p`
  flex-basis: 100%;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  text-align: center;

  a {
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`

const links: [string, string][] = [
  ["Work", "/work"],
  ["Commissions", "/commissions"],
  ["FAQ", "/faq"],
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <StyledFooter>
      <FooterLinks>
        {links.map(([text, url]) => (
          <Link key={url} href={url}>
            {text}
          </Link>
        ))}
      </FooterLinks>
      <CopyrightLine>
        &copy; {year} {site.name}. Built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        .
      </CopyrightLine>
    </StyledFooter>
  )
}
