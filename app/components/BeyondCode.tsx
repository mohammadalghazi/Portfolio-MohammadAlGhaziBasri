import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/*
  Beyond Code section
  Personal background (archery) framed as transferable skills.
  Three cards, each with an inline SVG icon that inherits the accent color.
  Data-driven: edit ITEMS to change content; icons are keyed by `icon`.
*/

const ITEMS = [
  {
    icon: "target",
    title: "National Archer",
    role: "10 Years · 5× National Medalist",
    desc: "Competed at the national level for a decade. Years of training built the discipline, consistency, and focus under pressure that I now bring to every project.",
  },
  {
    icon: "coach",
    title: "Archery Coach",
    role: "Clubs & School Programs",
    desc: "Coach archers across several clubs and school programs — breaking down complex techniques into clear, teachable steps and guiding people toward measurable improvement.",
  },
  {
    icon: "data",
    title: "Competition Data Officer",
    role: "National Archery Events",
    desc: "Manage and record match data at archery competitions, where accuracy is non-negotiable — sharpening the attention to detail and reliable, real-time data handling that carries directly into development.",
  },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    );
  }
  if (name === "coach") {
    return (
      <svg {...common}>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
        <path d="M19 8l2-2M17 6h4" />
      </svg>
    );
  }
  // data
  return (
    <svg {...common}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}

export default function BeyondCode() {
  return (
    <section id="beyond" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionHeading eyebrow="More Than Development" title="Beyond Code" />

      <div className="grid md:grid-cols-3 gap-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="bg-surface border border-border rounded-2xl p-8 h-full text-center hover:border-accent/50 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Icon name={item.icon} />
              </div>
              <h3 className="font-medium text-lg mb-1">{item.title}</h3>
              <p className="text-accent text-sm font-medium mb-3">{item.role}</p>
              <p className="text-ink-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}