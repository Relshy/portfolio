import ContentSection from "@/components/ContentSection"
import { Heading, ResponsiveParagraph } from "@/components/Typography"
import VideoTile from "@/components/VideoTile"
import { projects } from "@/data/projects"
import type { Metadata } from "next"
import styled from "styled-components"

export const metadata: Metadata = {
  title: "Videos",
}

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.4rem;
  margin: 1.5rem 0;
`

export default function Videos() {
  const videos = projects.filter((p) => p.video)

  return (
    <ContentSection>
      <Heading>Videos</Heading>
      <ResponsiveParagraph>
        System showcases and gameplay clips from past work.
      </ResponsiveParagraph>

      <TileGrid>
        {videos.map((project) => (
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

      <ResponsiveParagraph>
        These are only a few quick examples for public viewing.
        <br />
        If you&apos;re interested, contact me on Discord and I can show you
        more.
      </ResponsiveParagraph>
    </ContentSection>
  )
}
