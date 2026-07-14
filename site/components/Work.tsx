import { commissionVideos, type CommissionVideo } from "@/lib/videos";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconArrowUpRight } from "./Icons";

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
          title="Games I've worked on"
          subtitle="Live on Roblox with real players. Client work is available on request."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, i) => (
            <Reveal key={game.title} delay={i * 0.06}>
              <GameCard game={game} />
            </Reveal>
          ))}
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
