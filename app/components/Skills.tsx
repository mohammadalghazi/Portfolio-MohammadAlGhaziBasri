import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "Inertia.js", "REST API", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Vite", "Filament"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionHeading eyebrow="Explore My" title="Skills" />

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <div className="bg-surface border border-border rounded-2xl p-8 h-full">
              <h3 className="font-medium text-lg mb-6 text-center">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}