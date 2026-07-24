import styled from "styled-components"

const Tile = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-small) var(--radius-small) var(--radius-large)
    var(--radius-small);
  overflow: hidden;
  background: var(--ink);
  transition: transform 120ms ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const Video = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  object-fit: cover;
`

const CaptionBlock = styled.figcaption`
  padding: 10px 18px 14px;
  color: var(--white);
`

const CaptionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  letter-spacing: -0.4px;
`

const Meta = styled.span`
  color: var(--grey);
  font-size: 0.85rem;
`

const Description = styled.p`
  margin-top: 4px;
  color: var(--grey);
  font-size: 0.85rem;
  letter-spacing: -0.2px;
`

export default function VideoTile({
  src,
  poster,
  title,
  meta,
  description,
}: {
  src: string
  poster?: string
  title: string
  meta?: string
  description?: string
}) {
  return (
    <Tile id={title}>
      <Video controls preload="metadata" poster={poster}>
        <source src={src} type="video/mp4" />
      </Video>
      <CaptionBlock>
        <CaptionTop>
          <span>{title}</span>
          {meta && <Meta>{meta}</Meta>}
        </CaptionTop>
        {description && <Description>{description}</Description>}
      </CaptionBlock>
    </Tile>
  )
}
