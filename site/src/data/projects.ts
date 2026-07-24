export type Project = {
  scope: string
  name: string
  slug: string
  year: string
  description: string
  video?: string
  poster?: string
}

export const projects: Project[] = [
  {
    scope: "personal/",
    name: "escanor",
    slug: "escanor",
    year: "2026",
    description: "Ability system based off Escanor from the Seven Deadly Sins.",
    video: "/assets/videos/Escanor.mp4",
    poster: "/assets/videos/posters/Escanor.jpg",
  },
  {
    scope: "personal/",
    name: "gun-system",
    slug: "gun-system",
    year: "2026",
    description: "FPS + 3rd POV gun system.",
    video: "/assets/videos/GunSystem.mp4",
    poster: "/assets/videos/posters/GunSystem.jpg",
  },
  {
    scope: "personal/",
    name: "movement-system",
    slug: "movement-system",
    year: "2026",
    description: "Custom movement system: wall run, dash, swinging, sprint.",
    video: "/assets/videos/MovementSystem.mp4",
    poster: "/assets/videos/posters/MovementSystem.jpg",
  },
  {
    scope: "personal/",
    name: "combat-system",
    slug: "combat-system",
    year: "2026",
    description: "Parry based combat system.",
    video: "/assets/videos/ParrySystem.mp4",
    poster: "/assets/videos/posters/ParrySystem.jpg",
  },
  {
    scope: "personal/",
    name: "queue-system",
    slug: "queue-system",
    year: "2026",
    description: "Matchmaking and lobby queue system.",
    video: "/assets/videos/QueueSystem.mp4",
    poster: "/assets/videos/posters/QueueSystem.jpg",
  },
]
