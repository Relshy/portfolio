import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The plain-language terms for commissioning Roblox systems from Relshy.",
};

const sections = [
  {
    title: "What these terms cover",
    paragraphs: [
      "These terms apply to commission work you order from me (Relshy) through Discord. They exist so we both know what to expect. If something here doesn't fit your project, say so before we start and we can agree on something different in writing.",
    ],
  },
  {
    title: "Quotes and payment",
    paragraphs: [
      `Every commission gets a fixed price that we confirm in a DM before any work starts. The minimum commission is ${site.minCommission}. I accept PayPal, crypto, and Robux.`,
      "Robux prices are higher than the USD equivalent because Roblox takes a cut of every sale. A quote covers the scope we agreed on and nothing else.",
    ],
  },
  {
    title: "Deposit",
    paragraphs: [
      `Work starts after a ${site.deposit} deposit. For larger orders, over ${site.largeOrderThreshold}, the deposit is ${site.largeDeposit} instead. The rest is due at delivery.`,
      "The deposit covers the time I put in, so it isn't returned if you cancel a project I've already started. See refunds below.",
    ],
  },
  {
    title: "Testing and delivery",
    paragraphs: [
      "You get progress updates while I build. Before the final payment you can test the system yourself. Source files and everything else are handed over once the full amount is paid.",
    ],
  },
  {
    title: "Revisions and support",
    paragraphs: [
      "Adjustments within the agreed scope are part of the build. After delivery I fix bugs in the delivered work for free for 30 days.",
      "New features, design changes, or anything outside the original scope is a new quote.",
    ],
  },
  {
    title: "Refunds",
    paragraphs: [
      "Cancel before I start and you get the full deposit back. Cancel mid-project and I refund the part of the work that isn't done. Once the final version is delivered and accepted, there are no refunds.",
      "Opening a chargeback or payment dispute without messaging me first ends the working relationship and any remaining support.",
    ],
  },
  {
    title: "Ownership",
    paragraphs: [
      "After full payment the delivered work is yours, including for commercial use. I keep the right to reuse generic utilities and techniques that aren't specific to your game, and to show the work in my portfolio.",
      "If you need the project kept private, ask before we start and I'll leave it out of my portfolio.",
    ],
  },
  {
    title: "What I won't build",
    paragraphs: [
      "No scams, no exploits or cheat tools, and no copies of other people's paid work. I can decline a commission for any reason.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "I may update these terms now and then. The date at the top tells you which version you're reading. Changes don't apply to commissions that are already running.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Terms"
          title="Terms of Service"
          subtitle="The plain-language version of how commissions with me work. Sending a deposit means you agree to these."
        />

        <Reveal delay={0.08}>
          <p className="mt-6 text-center font-mono text-xs text-mute/80">
            Last updated: July 10, 2026
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={Math.min(i * 0.04, 0.2)}>
              <h2 className="text-lg font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm/7 text-mute">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="border-t border-white/[0.07] pt-8 text-center">
              <p className="text-sm/6 text-mute">
                Questions about any of this?{" "}
                <Link
                  href="/contact"
                  className="text-ink underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60"
                >
                  Ask me on Discord
                </Link>{" "}
                before you order.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
