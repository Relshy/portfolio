import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  IconController,
  IconGrowth,
  IconLayers,
  IconServer,
  IconShieldCheck,
} from "./Icons";

const services = [
  {
    title: "Core Gameplay Systems",
    description:
      "Strict Luau systems for combat, abilities, movement, progression, quests, and complete gameplay loops.",
    icon: IconController,
  },
  {
    title: "Data & Progression",
    description:
      "ProfileStore-backed player data, currencies, inventories, rewards, upgrades, and progression.",
    icon: IconGrowth,
  },
  {
    title: "Rojo Workflows & Tools",
    description:
      "Rojo project structure, reusable modules, admin tools, server systems, and developer utilities.",
    icon: IconServer,
  },
  {
    title: "Security Review",
    description:
      "Exploit prevention, server validation, remote security, system analysis, and hardening.",
    icon: IconShieldCheck,
  },
  {
    title: "Monetization & Full Systems",
    description:
      "Developer products, game passes, purchase handling, shops, and larger systems taken from concept to implementation.",
    icon: IconLayers,
    featured: true,
  },
];

export function Services() {
  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Commission Work"
          subtitle="Custom systems for Roblox games, written to be secure and still readable six months later. If what you need isn't listed here, ask anyway."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.06}
              className={service.featured ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="h-full p-7">
                {service.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 50% 0%, rgba(147,197,253,0.06), transparent 60%)",
                    }}
                  />
                )}
                <div className="relative">
                  <service.icon className="h-6 w-6 text-ice transition-transform duration-300 group-hover:scale-110" />
                  <h2 className="mt-5 text-lg font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm/6 text-mute">
                    {service.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
