import Link from "next/link";
import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  IconArrowRight,
  IconController,
  IconServer,
  IconShieldCheck,
} from "@/components/Icons";

const highlights = [
  {
    title: "Core Gameplay Systems",
    description:
      "Strict Luau combat, movement, progression, quests, and the systems players interact with directly.",
    icon: IconController,
  },
  {
    title: "Backend & Tools",
    description:
      "ProfileStore data, Rojo workflows, admin tools, and utilities that keep development manageable.",
    icon: IconServer,
  },
  {
    title: "Monetization & Security",
    description:
      "Purchase handling, server-side validation, remote security, and exploit-resistant game logic.",
    icon: IconShieldCheck,
  },
];

function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
    >
      {label}
      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Services"
              title="What I build"
              subtitle="The short version. Each service has its own page with details."
            />
            <Reveal delay={0.1}>
              <SectionLink href="/services" label="All services" />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <Card className="h-full p-6">
                  <div className="relative">
                    <item.icon className="h-6 w-6 text-ice transition-transform duration-300 group-hover:scale-110" />
                    <h2 className="mt-4 text-base font-semibold tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm/6 text-mute">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Card className="mx-auto max-w-3xl p-10 text-center sm:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 90% at 50% 0%, rgba(147,197,253,0.07), transparent 55%)",
                }}
              />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Have something in mind?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm/6 text-mute sm:text-base/7">
                  Send me the idea, a budget range, and a timeline if you have
                  one. Discord is the fastest way to reach me.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                  <Link href="/contact" className="btn btn-primary px-6 py-3">
                    Start a Commission
                  </Link>
                  <Link href="/process" className="btn btn-ghost px-6 py-3">
                    How commissions work
                  </Link>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
