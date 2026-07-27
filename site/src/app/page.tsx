import { ButtonLink } from "@/components/Button"
import CallToActionContainer from "@/components/CallToActionContainer"
import Card from "@/components/Card"
import ContentSection from "@/components/ContentSection"
import { Code, Heading, ResponsiveParagraph } from "@/components/Typography"
import { projects } from "@/data/projects"
import styled from "styled-components"

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr));
  gap: 1.4rem;
  margin: 1.5rem 0;
`

// Shorter blurbs for the homepage cards only — the full descriptions stay
// intact on /work and /videos.
const homeDescriptionOverrides: Record<string, string> = {
  escanor: "Abilities based off Escanor.",
  "movement-system": "Custom movement system.",
}

const featured = projects.slice(0, 4)

export default function Home() {
  return (
    <>
      <ContentSection variation="red" placement="floating">
        <Heading>Relshy, a Roblox systems developer</Heading>
        <ResponsiveParagraph>
          I build reliable gameplay systems for <Code>Roblox</Code>, including{" "}
          <u>combat</u>, <u>movement</u>, <u>matchmaking</u>, and the backend
          tools that keep everything running smoothly. Below, you can check
          out some of my recent work along with video walkthroughs showing
          each system in action.
        </ResponsiveParagraph>
        <ResponsiveParagraph>
          Browse my <b>previous work</b> to see the systems I&apos;ve built
          and how they function in-game. Looking to hire me? Visit the{" "}
          <b>commissions page</b> for pricing, project information, and the
          best way to get in touch.
        </ResponsiveParagraph>
        <ResponsiveParagraph>
          If you&apos;re interested in working with me the button below will
          take you to the page where its explained on how to order. I look
          forward to working with you!
        </ResponsiveParagraph>

        <CallToActionContainer>
          <ButtonLink to="/commissions">Start a commission</ButtonLink>
        </CallToActionContainer>
      </ContentSection>

      <ContentSection variation="light">
        <Heading>Featured work</Heading>
        <ResponsiveParagraph>
          A few recent systems. The full archive lives on the{" "}
          <a href="/work">work page</a>.
        </ResponsiveParagraph>
        <Flex>
          {featured.map((project) => (
            <Card
              key={project.slug}
              scope={project.scope}
              name={project.name}
              version={project.year}
              description={
                homeDescriptionOverrides[project.slug] ?? project.description
              }
              href={project.video ? `/videos#${project.slug}` : undefined}
            />
          ))}
        </Flex>
        <CallToActionContainer>
          <ButtonLink to="/work">See all past work</ButtonLink>
        </CallToActionContainer>
      </ContentSection>
    </>
  )
}
