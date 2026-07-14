"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  IconCheck,
  IconChevronDown,
  IconCopy,
  IconDiscord,
  IconGitHub,
  IconX,
} from "./Icons";

const orderTips = [
  {
    title: "Describe the end result, not the code",
    body: 'Tell me what the player should see and feel. "When a player touches the pad, they launch into the air with a trail." I\'ll figure out the technical part. That\'s my job.',
  },
  {
    title: "Give me your numbers",
    body: `Include your budget and deadline. A range is totally fine ("around 50k Robux" / "$100–150"). Without a budget I can't tell you if your idea fits it. My minimum is ${site.minCommission}.`,
  },
  {
    title: "Show me references",
    body: "Link a game or video that already does something close to what you want. One link saves a hundred words.",
  },
  {
    title: "Put it all in your first message",
    body: 'Don\'t send "a game" and hope I\'ll figure it out. Put everything in the description. I read all of it, and we confirm the price in a DM before we start.',
  },
];

function OrderTips() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card mx-auto mt-6 max-w-2xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="order-tips"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-medium tracking-tight">
          How to order: four quick tips
        </span>
        <IconChevronDown
          className={`h-4 w-4 shrink-0 text-mute transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id="order-tips"
        className={`grid transition-all duration-300 ease-out ${
          open
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ol className="space-y-6 border-t border-white/[0.07] px-6 py-6 text-left">
            {orderTips.map((tip, i) => (
              <li
                key={tip.title}
                className="grid gap-1.5 sm:grid-cols-[3rem_1fr]"
              >
                <span className="pt-0.5 font-mono text-sm text-ice/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    {tip.title}
                  </p>
                  <p className="mt-1.5 text-sm/6 text-mute">{tip.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="border-t border-white/[0.07] px-6 py-6 text-left">
            <p className="text-xs uppercase tracking-wider text-mute">
              What that looks like
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="flex items-center gap-2 text-xs font-medium text-mute">
                  <IconX className="h-3.5 w-3.5 text-red-300/80" />
                  Don't send this
                </p>
                <p className="mt-2.5 text-sm/6 italic text-mute">
                  "can u make me a battlegrounds game"
                </p>
              </div>
              <div className="border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="flex items-center gap-2 text-xs font-medium text-ink">
                  <IconCheck className="h-3.5 w-3.5 text-emerald-300" />
                  Send this instead
                </p>
                <p className="mt-2.5 text-sm/6 text-mute">
                  "I need a combat system like The Strongest Battlegrounds: M1
                  combos, dash, block, and two abilities. Here's a video with
                  the feel I want: [link]. My game: [link]. Deadline: about 3
                  weeks. Budget: around 40k Robux or $120."
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <CopyTemplate />
            </div>
            <p className="mt-5 text-sm/6 text-mute">
              Not sure about something? Send what you have anyway. I'd rather
              answer questions than have you not message at all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Async clipboard blocked — fall back to execCommand.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    el.remove();
    return ok;
  }
}

/** Reusable "copy → check feedback" state with cleanup on unmount. */
function useCopied() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const markCopied = () => {
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return { copied, markCopied };
}

function CopyHandle() {
  const { copied, markCopied } = useCopied();

  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(site.discordHandle)) markCopied();
      }}
      className="btn btn-ghost font-mono text-sm"
      aria-live="polite"
    >
      @{site.discordHandle}
      {copied ? (
        <IconCheck className="h-4 w-4 text-emerald-300" />
      ) : (
        <IconCopy className="h-4 w-4 text-mute" />
      )}
      <span className="sr-only">
        {copied ? "Copied to clipboard" : "Copy Discord handle"}
      </span>
    </button>
  );
}

const orderTemplate = `Game: [link to your game, or "new project"]
System: [what you need built]
Details: [features and how it should feel]
References: [links to games or videos that do it right]
Deadline: [rough date]
Budget: [range in Robux or USD]`;

function CopyTemplate() {
  const { copied, markCopied } = useCopied();

  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(orderTemplate)) markCopied();
      }}
      className="btn btn-ghost text-sm"
      aria-live="polite"
    >
      {copied ? "Copied. Paste it in Discord" : "Copy order template"}
      {copied ? (
        <IconCheck className="h-4 w-4 text-emerald-300" />
      ) : (
        <IconCopy className="h-4 w-4 text-mute" />
      )}
    </button>
  );
}

export function Contact() {
  return (
    <section className="relative pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[28rem] opacity-60"
        style={{
          background:
            "radial-gradient(60% 90% at 50% 100%, rgba(147,197,253,0.09), rgba(167,139,250,0.04) 55%, transparent 80%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Start a commission"
          subtitle="Send me your idea, required systems, budget range, timeline, and any reference games. I respond fastest on Discord and can provide past work examples on request."
        />

        <Reveal delay={0.1} className="mt-12">
          <Card className="mx-auto max-w-2xl p-8 text-center sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, rgba(147,197,253,0.07), transparent 55%)",
              }}
            />
            <div className="relative">
              <Image
                src="/pfp.png"
                alt="Relshy's avatar"
                width={88}
                height={88}
                className="mx-auto rounded-full border border-white/15"
              />
              <p className="mt-6 text-lg font-medium tracking-tight">
                Fastest response on Discord
              </p>
              <p className="mt-2 text-sm/6 text-mute">
                A rough idea is enough to get started. I'll help you scope the
                rest.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={site.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3 text-base"
                >
                  <IconDiscord className="h-5 w-5" />
                  Contact on Discord
                </a>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost px-6 py-3 text-base"
                >
                  <IconGitHub className="h-5 w-5" />
                  GitHub
                </a>
                <CopyHandle />
              </div>
              <p className="mt-7 text-sm text-mute">
                Minimum commission: {site.minCommission} ({site.paymentMethods}
                ).
              </p>
              <p className="mt-2 text-sm text-mute">
                Portfolio examples and past work available on request. Also
                @{site.discordHandle} on TikTok and Roblox.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.18}>
          <OrderTips />
        </Reveal>
      </div>
    </section>
  );
}
