import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionHeading eyebrow="Get To Know More" title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <Reveal className="flex justify-center">
          <div className="w-72 h-72 rounded-3xl overflow-hidden border border-border bg-surface">
            <img
              src="/about.jpg"
              alt="Mohammad Al Ghazi Basri"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Details */}
        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-surface border border-border rounded-2xl p-5 text-center">
              <h3 className="font-medium mb-1">Experience</h3>
              <p className="text-ink-muted text-sm">
                2+ years
                <br />
                Freelance Web Projects
              </p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5 text-center">
              <h3 className="font-medium mb-1">Education</h3>
              <p className="text-ink-muted text-sm">
                Bachelor of Informatics Engineering
                <br />
                Mercu Buana University, 2025
              </p>
            </div>
          </div>

          <p className="text-ink-muted leading-relaxed">
            I&apos;m a full-stack web developer and Informatics Engineering
            graduate who has spent the past 2 years building paid web projects
            for clients, many of them in the sports domain. I care about clean,
            maintainable code and delivering applications that are reliable and
            genuinely useful. Outside of code, I&apos;m a former national-level
            archer and archery coach — a background that shaped the discipline,
            focus, and consistency I bring to every project.
          </p>
        </Reveal>
      </div>
    </section>
  );
}