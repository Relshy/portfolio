import type { Metadata } from "next";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Roblox games Relshy has worked on, including RNG Battles, Iron Soul: Dungeon, and Merge Vs Mobs. Client work available on request.",
};

export default function WorkPage() {
  return <Work />;
}
