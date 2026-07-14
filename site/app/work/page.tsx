import type { Metadata } from "next";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Roblox projects and client systems by Relshy: Sky Garden, commissioned client work, and shipped games.",
};

export default function WorkPage() {
  return <Work />;
}
