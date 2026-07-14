"use client";

import { useId, useState } from "react";
import { IconChevronDown } from "./Icons";

const faqs = [
  {
    q: "Who owns the code?",
    a: "You do, after full payment, including commercial use. I keep generic utilities that aren't specific to your game, and I may show the work in my portfolio unless you ask me not to.",
  },
  {
    q: "Do you use free models?",
    a: "No. Everything is written for your game. If a well-tested open source library genuinely fits, I'll tell you before using it.",
  },
  {
    q: "Can you work in my existing codebase?",
    a: "Yes. I'll read through it first and match the existing style instead of rewriting things that already work.",
  },
  {
    q: "How many revisions do I get?",
    a: "Tweaks within the agreed scope are part of the build, and I fix bugs in delivered work for free for 30 days. New features or scope changes are a new quote.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Usually, yes. Mention it in your first message and send the document, and I'll read it before we start.",
  },
  {
    q: "What if I don't know exactly what I need?",
    a: "Send what you have. Scoping is the first step of every commission, and I'll help you narrow it down.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-t border-white/[0.07]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium tracking-tight sm:text-base">
          {q}
        </span>
        <IconChevronDown
          className={`h-4 w-4 shrink-0 text-mute transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[62ch] pb-5 text-sm/6 text-mute">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <div className="mx-auto mt-24 max-w-3xl">
      <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        Common questions
      </h2>
      <div className="mt-10 border-b border-white/[0.07]">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  );
}
