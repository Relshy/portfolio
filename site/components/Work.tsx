import { commissionVideos, type CommissionVideo } from "@/lib/videos";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconArrowUpRight } from "./Icons";

type MotifProps = React.SVGProps<SVGSVGElement>;

/** Layered clouds and a floating island for Sky Garden. */
function CloudMotif(props: MotifProps) {
  return (
    <svg viewBox="0 0 260 200" fill="none" aria-hidden="true" {...props}>
      <defs>
        <pattern id="wm-cloud-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" fillOpacity="0.15" />
        </pattern>
      </defs>
      <rect width="260" height="200" fill="url(#wm-cloud-dots)" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M34 96a19 19 0 0 1 35-9 15 15 0 0 1 28 3 13 13 0 0 1-3 25H48a15 15 0 0 1-14-19z" />
        <path
          d="M156 52a14 14 0 0 1 26-7 11 11 0 0 1 21 2 10 10 0 0 1-2 19h-34a11 11 0 0 1-11-14z"
          strokeOpacity="0.55"
        />
        <path d="M142 144h76l-13 18h-50l-13-18z" />
        <path d="M168 162l10 16 12-16" strokeOpacity="0.7" />
        <path d="M154 144l6-10h40l6 10" strokeOpacity="0.5" />
      </g>
      <g fill="currentColor" fillOpacity="0.5">
        <circle cx="186" cy="190" r="2" />
        <circle cx="206" cy="184" r="1.5" />
        <circle cx="170" cy="186" r="1.5" />
      </g>
    </svg>
  );
}

/** Connected system nodes and code brackets for client commissions. */
function NodesMotif(props: MotifProps) {
  return (
    <svg viewBox="0 0 260 200" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.5">
        <path d="M52 62L124 38L196 78" />
        <path d="M124 38L232 48" />
        <path d="M52 62L92 128L196 78" />
        <path d="M92 128L182 150" />
      </g>
      <g stroke="currentColor" strokeWidth="2">
        <circle cx="52" cy="62" r="6" />
        <circle cx="124" cy="38" r="8" />
        <circle cx="196" cy="78" r="6" />
        <circle cx="92" cy="128" r="6" />
        <circle cx="232" cy="48" r="4" />
        <circle cx="182" cy="150" r="8" />
      </g>
      <g stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M96 168l-16 18 16 18" />
        <path d="M136 168l16 18-16 18" />
        <path d="M122 162l-12 50" strokeOpacity="0.6" />
      </g>
    </svg>
  );
}

export type Project = {
  title: string;
  description: string;
  tags: string[];
  motif: (props: MotifProps) => React.ReactElement;
};

export const projects: Project[] = [
  {
    title: "Sky Garden",
    description:
      "A hobby project built with a friend, featuring a wide range of experimental mechanics. Currently unreleased.",
    tags: ["Mechanics", "Systems", "Unreleased"],
    motif: CloudMotif,
  },
  {
    title: "Client Commissions",
    description:
      "Core gameplay, ProfileStore-backed progression, monetization, and supporting tools built in strict Luau with Rojo workflows.",
    tags: ["Strict Luau", "ProfileStore", "Rojo", "Monetization"],
    motif: NodesMotif,
  },
];

/** Editorial full-width row: index, title, tags, description, motif on the right. */
export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden border-t border-white/[0.07] py-10 sm:py-12">
      <project.motif
        aria-hidden
        className="absolute -right-4 top-1/2 hidden h-44 w-auto -translate-y-1/2 text-ice opacity-[0.07] transition-all duration-700 ease-out group-hover:-right-1 group-hover:opacity-20 sm:block"
      />
      <div className="relative grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,20rem)] sm:gap-8">
        <span className="pt-1 font-mono text-sm text-mute/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h2 className="w-fit bg-gradient-to-r from-sky-200 to-violet-300 bg-clip-text text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-transparent sm:text-3xl">
            {project.title}
          </h2>
          <ul className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-wider text-mute/90">
            {project.tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-2.5">
                {i > 0 && (
                  <span aria-hidden className="text-white/25">
                    ·
                  </span>
                )}
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm/6 text-mute sm:pt-1.5">{project.description}</p>
      </div>
    </article>
  );
}

/** Live Roblox games. Thumbnails are self-hosted copies in public/games/. */
const games = [
  {
    title: "RNG Battles",
    href: "https://www.roblox.com/games/100490989733123/RNG-Battles",
    image: "/games/rng-battles.jpg",
    blurb:
      "Roll random abilities, fight the rest of the server, and spend your gold on better luck.",
    visits: "25M+ visits",
  },
  {
    title: "Iron Soul: Dungeon",
    href: "https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon",
    image: "/games/iron-soul-dungeon.jpg",
    blurb:
      "Dungeon crawler set on floating isles overrun by creatures from an ancient seal.",
    visits: "117M+ visits",
  },
  {
    title: "Merge Vs Mobs",
    href: "https://www.roblox.com/games/109509628648368/Merge-Vs-Mobs",
    image: "/games/merge-vs-mobs.jpg",
    blurb:
      "Buy and merge units to hold your base against escalating waves of mobs.",
    visits: "10M+ visits",
  },
];

function GameCard({ game }: { game: (typeof games)[number] }) {
  return (
    <a
      href={game.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card group block"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.image}
          alt={`${game.title} on Roblox`}
          width={768}
          height={432}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {game.title}
          </h3>
          <IconArrowUpRight className="h-4 w-4 shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </div>
        <p className="mt-1.5 text-sm/6 text-mute">{game.blurb}</p>
        <p className="mt-3 text-xs uppercase tracking-wider text-ice/80">
          {game.visits}
        </p>
      </div>
    </a>
  );
}

function VideoCard({ video }: { video: CommissionVideo }) {
  return (
    <div className="card">
      <div className="aspect-video bg-black/40">
        {video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <video
            src={video.src}
            controls
            preload="metadata"
            className="h-full w-full"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold tracking-tight">
          {video.title}
        </h3>
        {video.description && (
          <p className="mt-1.5 text-sm/6 text-mute">{video.description}</p>
        )}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="Projects, client systems, and shipped games."
        />

        <div className="mt-14 border-b border-white/[0.07]">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <ProjectRow project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            align="left"
            eyebrow="Shipped"
            title="Games I've worked on"
            subtitle="Live on Roblox with real players. Click through to try them."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game, i) => (
              <Reveal key={game.title} delay={i * 0.06}>
                <GameCard game={game} />
              </Reveal>
            ))}
          </div>
        </div>

        {commissionVideos.length > 0 && (
          <div className="mt-24">
            <SectionHeading
              align="left"
              eyebrow="Clips"
              title="Commission clips"
              subtitle="Short recordings of systems I built for clients."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {commissionVideos.map((video, i) => (
                <Reveal key={video.title} delay={i * 0.06}>
                  <VideoCard video={video} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal className="mt-16 text-center">
          <p className="text-sm text-mute">
            There's more that isn't shown here. Message me on Discord and I'll
            pull up examples relevant to your project.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
