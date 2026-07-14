import type { Metadata } from "next";
import { Experience } from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Roblox development, freelance commissions, cybersecurity work, and a Google backend tooling internship.",
};

export default function ExperiencePage() {
  return <Experience />;
}
