import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  IconBriefcase,
  IconCube,
  IconShieldLock,
  IconTerminal,
} from "./Icons";

const experience = [
  {
    title: "Roblox Development",
    description:
      "Gameplay systems, scripting, mechanics, and custom tools for Roblox experiences.",
    icon: IconCube,
  },
  {
    title: "Freelance Work",
    description:
      "Commissioned systems for clients, ranging from simple scripts to larger game features.",
    icon: IconBriefcase,
  },
  {
    title: "Cybersecurity",
    description:
      "Still in college for computer science and cybersecurity. Hands-on systems analysis, vulnerability discovery, and practical security fixes.",
    icon: IconShieldLock,
  },
  {
    title: "Google Internship",
    description:
      "Backend tooling experience and exposure to production-level engineering practices.",
    icon: IconTerminal,
  },
];

export function Experience() {
  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Background"
          title="Experience"
          subtitle="Most of my time goes into Roblox scripting and client commissions. Beside that came cybersecurity work and a backend tooling internship at Google. I like systems that keep working after a game grows."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.06}>
              <Card className="h-full p-6">
                <div className="relative">
                  <entry.icon className="h-6 w-6 text-ice transition-transform duration-300 group-hover:scale-110" />
                  <h2 className="mt-4 text-base font-semibold tracking-tight">
                    {entry.title}
                  </h2>
                  <p className="mt-2 text-sm/6 text-mute">{entry.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
