import { ButtonLink } from "@/components/Button"
import CallToActionContainer from "@/components/CallToActionContainer"
import ContentSection from "@/components/ContentSection"
import { Heading, ResponsiveParagraph } from "@/components/Typography"
import { steps } from "@/data/commissions"
import { site } from "@/data/site"
import type { Metadata } from "next"
import styled from "styled-components"

export const metadata: Metadata = {
  title: "Commissions",
}

const Steps = styled.ol`
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
  counter-reset: step;
  display: grid;
  gap: 0.8rem;
  max-width: 900px;
`

const Step = styled.li`
  counter-increment: step;
  position: relative;
  background: var(--white);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius-small) var(--radius-small) var(--radius-large)
    var(--radius-small);
  padding: 1rem 1.3rem 1rem 4.4rem;

  &::before {
    content: counter(step);
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clay);
    color: var(--white);
    font-weight: 900;
    font-size: 1.3rem;
    border-radius: 50% 50% 50% 5px;
  }

  strong {
    font-weight: 700;
  }
`

export default function Commissions() {
  return (
    <ContentSection variation="red" placement="floating">
      <Heading>Commissions</Heading>
      <ResponsiveParagraph>
        Send the idea, a budget range, and a timeline if you have one.
        I&apos;ll scope it, give you a fixed quote, and lay out a build plan
        before any code gets written.
      </ResponsiveParagraph>

      <Heading>How it works</Heading>
      <Steps>
        {steps.map((step) => (
          <Step key={step.title}>
            <strong>{step.title}</strong> &mdash; {step.description}
          </Step>
        ))}
      </Steps>

      <ResponsiveParagraph>
        Two rounds of revisions are included on every commission.
      </ResponsiveParagraph>
      <ResponsiveParagraph>
        Questions about licensing, refunds, or turnaround? Check the{" "}
        <a href="/faq">FAQ</a>.
      </ResponsiveParagraph>

      <CallToActionContainer>
        <ButtonLink to={`mailto:${site.email}?subject=Commission%20request`}>
          Request a slot
        </ButtonLink>
      </CallToActionContainer>
    </ContentSection>
  )
}
