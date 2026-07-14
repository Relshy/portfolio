"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/lib/site";
import { Faq } from "./Faq";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Scope",
    description: `We define the system, requirements, timeline, and expected behavior. We agree on a fixed price, and a ${site.deposit} deposit starts the work (${site.largeDeposit} for orders over ${site.largeOrderThreshold}).`,
  },
  {
    title: "Build",
    description:
      "I develop the system with clean structure and server-sided security in mind. You get progress updates as I go.",
  },
  {
    title: "Test",
    description:
      "The system is tested, adjusted, and reviewed for edge cases. You try it yourself before the final payment.",
  },
  {
    title: "Deliver",
    description:
      "After the final payment you get the files, an explanation of how everything works, and support details.",
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function StepNode({ index }: { index: number }) {
  return (
    <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-[#0b0b0d] text-sm font-medium text-ice shadow-[0_0_24px_-6px_rgba(147,197,253,0.35)]">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Process"
          title="How commissions work"
          subtitle="Four steps from first message to delivered system. You'll know where things stand the whole way through."
        />

        {/* Desktop: horizontal pipeline with a traveling pulse */}
        <div className="relative mt-20 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-5"
          >
            <motion.div
              className="h-px w-full origin-left bg-gradient-to-r from-sky-300/40 via-white/20 to-violet-300/40"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            <div className="beam-dot" />
          </div>

          <motion.ol
            className="grid grid-cols-4 gap-6"
            variants={list}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={item}
                className="flex flex-col items-center text-center"
              >
                <StepNode index={i} />
                <h2 className="mt-5 text-lg font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-[30ch] text-sm/6 text-mute">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Mobile: vertical timeline with the same pulse */}
        <div className="relative mt-14 lg:hidden">
          <div aria-hidden className="absolute bottom-5 left-5 top-5 w-px">
            <motion.div
              className="h-full w-px origin-top bg-gradient-to-b from-sky-300/40 via-white/20 to-violet-300/40"
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            <div className="beam-dot-v" />
          </div>

          <motion.ol
            className="space-y-10"
            variants={list}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={item}
                className="relative pl-16"
              >
                <span className="absolute left-0 top-0">
                  <StepNode index={i} />
                </span>
                <h2 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-[40ch] text-sm/6 text-mute">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-white/[0.07] pt-8 text-center lg:mt-20">
          <p className="text-sm/6 text-mute">
            Payment in short: {site.deposit} deposit up front (
            {site.largeDeposit} if the order is over {site.largeOrderThreshold}
            ), the rest at delivery. Minimum commission is {site.minCommission}{" "}
            ({site.paymentMethods}).
          </p>
          <p className="mt-2 text-sm/6 text-mute">
            The full details are in the{" "}
            <Link
              href="/terms"
              className="text-ink underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60"
            >
              terms of service
            </Link>
            .
          </p>
        </div>

        <Faq />
      </div>
    </section>
  );
}
