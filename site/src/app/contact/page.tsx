import { ButtonLink } from "@/components/Button"
import ContentSection from "@/components/ContentSection"
import Icon from "@/components/Icon"
import { Heading, ResponsiveParagraph } from "@/components/Typography"
import { site } from "@/data/site"
import type { Metadata } from "next"
import styled from "styled-components"

export const metadata: Metadata = {
  title: "Contact",
}

const Centered = styled.div`
  text-align: center;

  article {
    max-width: 720px;
    margin: 0 auto;
  }
`

const ContactMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.6rem 0 0.6rem;
`

const ContactMethod = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  padding: 0.6rem 1.3rem;
  font-size: 1.05rem;
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
    color: var(--gold);
  }
`

export default function Contact() {
  return (
    <ContentSection variation="red" placement="floating">
      <Centered>
        <article>
          <Heading>Get in touch</Heading>
          <ResponsiveParagraph>
            Discord is the fastest way to reach me for commission requests.
            Email works too, especially for longer specs or files.
          </ResponsiveParagraph>

          <ButtonLink to={`mailto:${site.email}`}>{site.email}</ButtonLink>

          <ContactMethods>
            <ContactMethod
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="github" />
              <span>{site.githubHandle}</span>
            </ContactMethod>
            <ContactMethod
              href={site.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="discord" />
              <span>Discord &mdash; {site.discordHandle}</span>
            </ContactMethod>
          </ContactMethods>
        </article>
      </Centered>
    </ContentSection>
  )
}
