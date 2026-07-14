"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const trustSignals = [
  "Strict Luau",
  "ProfileStore",
  "Rojo workflows",
  "Monetization systems",
];

function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {/* soft gradient wash behind the headline */}
      <div
        className="absolute left-1/2 top-[-340px] h-[680px] w-[1000px] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(147,197,253,0.13), rgba(167,139,250,0.05) 55%, transparent 75%)",
          filter: "blur(48px)",
        }}
      />
      {/* horizon beam */}
      <div className="absolute left-1/2 top-[62%] h-px w-[46rem] max-w-[90vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-200/25 to-transparent" />

      {/* grid, node graph, and floating system blocks */}
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(58%_55%_at_50%_38%,black,transparent)]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" fill="none" stroke="rgba(255,255,255,0.045)" />
          </pattern>
          <linearGradient id="hero-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(147,197,253,0.35)" />
            <stop offset="1" stopColor="rgba(167,139,250,0.25)" />
          </linearGradient>
        </defs>

        <rect width="1200" height="800" fill="url(#hero-grid)" />

        {/* node connections */}
        <g stroke="url(#hero-link)" strokeWidth="1" fill="none" opacity="0.6">
          <path d="M150 250L300 160L470 260" />
          <path d="M470 260L640 190" />
          <path d="M760 170L930 290L1060 180" />
          <path d="M930 290L1050 420" />
        </g>

        {/* nodes */}
        <g fill="#93c5fd">
          <circle className="node-pulse" cx="150" cy="250" r="3.5" />
          <circle className="node-pulse-2" cx="300" cy="160" r="3" />
          <circle className="node-pulse-3" cx="470" cy="260" r="3.5" />
          <circle className="node-pulse" cx="640" cy="190" r="2.5" />
          <circle className="node-pulse-2" cx="760" cy="170" r="3" />
          <circle className="node-pulse-3" cx="930" cy="290" r="3.5" />
          <circle className="node-pulse" cx="1060" cy="180" r="3" />
          <circle className="node-pulse-2" cx="1050" cy="420" r="2.5" />
        </g>

        {/* floating system blocks with code lines */}
        <g className="float-slow" transform="translate(90, 330)">
          <rect width="170" height="92" rx="14" fill="rgba(17,17,17,0.7)" stroke="rgba(255,255,255,0.1)" />
          <rect x="18" y="22" width="76" height="6" rx="3" fill="rgba(147,197,253,0.4)" />
          <rect x="18" y="40" width="112" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
          <rect x="18" y="58" width="58" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
          <circle cx="148" cy="24" r="4" fill="rgba(167,139,250,0.5)" />
        </g>
        <g className="float-slower" transform="translate(930, 90)">
          <rect width="170" height="92" rx="14" fill="rgba(17,17,17,0.7)" stroke="rgba(255,255,255,0.1)" />
          <rect x="18" y="22" width="96" height="6" rx="3" fill="rgba(167,139,250,0.35)" />
          <rect x="18" y="40" width="64" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
          <rect x="18" y="58" width="108" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
          <circle cx="148" cy="24" r="4" fill="rgba(147,197,253,0.5)" />
        </g>
        <g className="float-slowest" transform="translate(1000, 500)">
          <rect width="150" height="80" rx="13" fill="rgba(17,17,17,0.7)" stroke="rgba(255,255,255,0.1)" />
          <rect x="16" y="20" width="66" height="5.5" rx="2.75" fill="rgba(147,197,253,0.35)" />
          <rect x="16" y="36" width="94" height="5.5" rx="2.75" fill="rgba(255,255,255,0.12)" />
          <rect x="16" y="52" width="48" height="5.5" rx="2.75" fill="rgba(255,255,255,0.12)" />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40">
      <HeroBackdrop />

      <motion.div
        className="mx-auto max-w-6xl px-6 text-center"
        variants={container}
        initial={false}
        animate="show"
      >
        <motion.div variants={item} className="flex justify-center">
          <Image
            src="/pfp.png"
            alt="Relshy's avatar"
            width={76}
            height={76}
            priority
            className="rounded-full border border-white/15 shadow-[0_0_40px_-8px_rgba(147,197,253,0.35)]"
          />
        </motion.div>

        <motion.p variants={item} className="mt-6">
          <span className="pill gap-2 py-1.5 pl-3 pr-3.5 text-[0.8125rem]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-300" />
            </span>
            {site.status}
          </span>
        </motion.p>

        <motion.h1
          variants={item}
          className="mx-auto mt-7 max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold tracking-tight text-balance text-transparent sm:text-6xl md:text-7xl"
        >
          Roblox development,{" "}
          <span className="bg-gradient-to-r from-sky-200 to-violet-300 bg-clip-text text-transparent">
            built with precision.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base/7 text-mute text-pretty sm:text-lg/8"
        >
          I build gameplay systems for Roblox: combat, economies, progression,
          backend tools, and full custom commissions. Everything runs
          server-side and is written to survive real players.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Link href="/contact" className="btn btn-primary px-6 py-3 text-base">
            Start a Commission
          </Link>
          <Link href="/work" className="btn btn-ghost px-6 py-3 text-base">
            View Work
          </Link>
        </motion.div>

        <motion.ul
          variants={item}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-mute"
        >
          {trustSignals.map((signal, i) => (
            <li key={signal} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden className="text-white/25">
                  ·
                </span>
              )}
              {signal}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
