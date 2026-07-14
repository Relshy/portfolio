import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-ice/80">
        {eyebrow}
      </p>
      <Heading className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base/7 text-mute text-pretty">{subtitle}</p>
      )}
    </Reveal>
  );
}
