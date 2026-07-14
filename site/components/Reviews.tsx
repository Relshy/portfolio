import Link from "next/link";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          as="h1"
          eyebrow="Client Work"
          title="References"
          subtitle="Relevant work samples and client references are available privately when the project allows it."
        />

        <Reveal delay={0.1} className="mt-14">
          <Card className="mx-auto max-w-2xl p-8 text-center sm:p-12">
            <div className="relative">
              <h2 className="text-xl font-semibold tracking-tight">
                Ask for a relevant example
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm/6 text-mute">
                Tell me what you are building and I will share work that is
                close to your requirements. Some commissions remain private,
                so public screenshots and attribution depend on client
                permission.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3.5">
                <Link href="/work" className="btn btn-ghost px-6 py-3">
                  View public work
                </Link>
                <Link href="/contact" className="btn btn-primary px-6 py-3">
                  Request references
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
