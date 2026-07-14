import type { Metadata } from "next";
import { Process } from "@/components/Process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How commissions work: scope, build, test, deliver. Four steps from first message to delivered system.",
};

export default function ProcessPage() {
  return <Process />;
}
