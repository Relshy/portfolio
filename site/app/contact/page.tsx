import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a Roblox commission. Fastest response on Discord: @sillyrelshy.",
};

export default function ContactPage() {
  return <Contact />;
}
