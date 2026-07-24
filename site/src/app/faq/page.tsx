import ContentSection from "@/components/ContentSection"
import { Heading, ResponsiveParagraph } from "@/components/Typography"
import { faqItems } from "@/data/faq"
import type { Metadata } from "next"
import styled from "styled-components"

export const metadata: Metadata = {
  title: "FAQ",
}

const FaqList = styled.div`
  max-width: 900px;
`

const Details = styled.details`
  margin-bottom: 0.9rem;
`

const Summary = styled.summary`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: var(--ink);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.4px;
  padding: 0.9rem 1.6rem;
  border-radius: var(--pill-radius);
  transition: background 120ms ease;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    background: var(--ink-soft);
  }
`

const Marker = styled.span`
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--clay);
  transition: transform 150ms ease;
  flex: none;

  ${Details}[open] & {
    transform: rotate(45deg);
  }
`

const Answer = styled.div`
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-small) var(--radius-small) var(--radius-large)
    var(--radius-small);
  padding: 0.3rem 1.6rem;
  margin-top: 0.6rem;
`

export default function Faq() {
  return (
    <ContentSection>
      <Heading>FAQ</Heading>
      <ResponsiveParagraph>
        Answers to the questions I get most often about commissions.
      </ResponsiveParagraph>

      <FaqList>
        {faqItems.map((item) => (
          <Details key={item.question}>
            <Summary>
              <span>{item.question}</span>
              <Marker aria-hidden="true">+</Marker>
            </Summary>
            <Answer>
              <ResponsiveParagraph>{item.answer}</ResponsiveParagraph>
            </Answer>
          </Details>
        ))}
      </FaqList>

      <ResponsiveParagraph>
        Something else? <a href="/contact">Get in touch</a>.
      </ResponsiveParagraph>
    </ContentSection>
  )
}
