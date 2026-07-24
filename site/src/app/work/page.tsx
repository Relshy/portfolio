import { ButtonLink } from "@/components/Button"
import CallToActionContainer from "@/components/CallToActionContainer"
import ContentSection from "@/components/ContentSection"
import { Heading, ResponsiveParagraph, SubHeading } from "@/components/Typography"
import VideoTile from "@/components/VideoTile"
import WorkList from "@/components/WorkList"
import { projects } from "@/data/projects"
import type { Metadata } from "next"
import { Suspense } from "react"
import styled from "styled-components"

export const metadata: Metadata = {
  title: "Work",
}

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.4rem;
  margin: 1.5rem 0 2rem;
`

export default function Work() {
  const featuredVideos = projects.filter((p) => p.video).slice(0, 3)

  return (
    <ContentSection>
      <Heading>Past work</Heading>
      <ResponsiveParagraph>
        The full project archive. Type in the search bar above to filter it.
      </ResponsiveParagraph>

      <Suspense fallback={null}>
        <WorkList />
      </Suspense>

      <SubHeading>Featured builds</SubHeading>
      <TileGrid>
        {featuredVideos.map((project) => (
          <VideoTile
            key={project.slug}
            src={project.video!}
            poster={project.poster}
            title={project.name}
            meta={project.year}
            description={project.description}
          />
        ))}
      </TileGrid>
      <CallToActionContainer>
        <ButtonLink to="/videos">See all videos</ButtonLink>
      </CallToActionContainer>
    </ContentSection>
  )
}
