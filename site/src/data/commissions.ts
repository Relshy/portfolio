// NOTE: pricing, terms, and steps are carried over from an earlier draft —
// double-check the numbers and wording before this goes live.
export const commissionStatus = {
  status: "OPEN",
  slotsLeft: "3 slots left",
  queue: "queue: 2 weeks",
}

export const tiers = [
  {
    name: "script",
    price: "$60+",
    description:
      "A single focused module or utility script, documented and ready to drop in. 3-5 days.",
    popular: false,
  },
  {
    name: "system",
    price: "$250+",
    description:
      "A full gameplay system such as combat, quests, or an economy, with docs and basic tests. 1-3 weeks.",
    popular: true,
  },
  {
    name: "full backend",
    price: "$600+",
    description:
      "Complete backend architecture: data, monetization, and security for a whole game. 3-6 weeks.",
    popular: false,
  },
]

export const terms = [
  "50% upfront, 50% on delivery",
  "Two rounds of revisions included",
  "Source delivered in a Rojo-compatible project structure",
  "Server-authoritative by default; client-trusting logic only on request",
]

export const steps = [
  {
    title: "You reach out",
    description:
      "Send the idea, a budget range, and a timeline if you have one. Discord is the fastest way to reach me.",
  },
  {
    title: "Scoping & quote",
    description:
      "I confirm the scope and give a fixed quote plus an estimated delivery date.",
  },
  {
    title: "Build & check-ins",
    description:
      "Progress updates at key milestones, questions answered as they come up.",
  },
  {
    title: "Delivery & docs",
    description: "Final scripts, a short usage doc, and a support window after handoff.",
  },
]
