import type { Metadata } from "next";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commission work: gameplay systems, economies, backend tools, security reviews, and full custom Roblox systems.",
};

export default function ServicesPage() {
  return <Services />;
}
