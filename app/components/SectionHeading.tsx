import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="text-center mb-12">
      <p className="text-ink-muted text-sm mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
    </Reveal>
  );
}