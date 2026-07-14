import type { Metadata } from "next";
import { Reviews } from "@/components/Reviews";

export const metadata: Metadata = {
  title: "References",
  description:
    "Request relevant Roblox development work samples and client references from Relshy.",
};

export default function ReviewsPage() {
  return <Reviews />;
}
