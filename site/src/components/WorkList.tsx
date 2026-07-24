"use client"

import { useSearchParams } from "next/navigation"
import styled from "styled-components"
import { projects } from "@/data/projects"
import Card from "./Card"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(420px, 100%), 1fr));
  gap: 1.4rem;
  margin: 1.5rem 0;
`

const NoResults = styled.p`
  background: var(--white);
  border: 1px dashed var(--line);
  border-radius: var(--radius-small) var(--radius-small) var(--radius-large)
    var(--radius-small);
  padding: 1.5rem;
  color: var(--ink-soft);
`

export default function WorkList() {
  const searchParams = useSearchParams()
  const query = (searchParams.get("q") ?? "").trim().toLowerCase()

  const filtered = query
    ? projects.filter((p) =>
        `${p.scope}${p.name}${p.description}`.toLowerCase().includes(query)
      )
    : projects

  return (
    <>
      <Grid>
        {filtered.map((project) => (
          <Card
            key={project.slug}
            scope={project.scope}
            name={project.name}
            version={project.year}
            description={project.description}
            href={project.video ? `/videos#${project.slug}` : undefined}
          />
        ))}
      </Grid>
      {filtered.length === 0 && (
        <NoResults>No projects match that search.</NoResults>
      )}
    </>
  )
}
