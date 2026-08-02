import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  FEATURED_PROJECTS,
  OTHER_PROJECTS,
  type Project,
} from "../data/projects";

/*
  Projects section
  - Featured: large cards that alternate image left/right on desktop.
  - Other: compact grid below.
  Buttons render conditionally: a link only shows if its URL exists.
*/

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener"
          className="bg-accent text-black font-medium px-5 py-2.5 rounded-lg hover:bg-accent-600 transition-colors text-sm"
        >
          {project.liveLabel ?? "Live Site"}
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener"
          className="border border-border px-5 py-2.5 rounded-lg hover:bg-surface-2 transition-colors text-sm"
        >
          GitHub
        </a>
      )}
    </div>
  );
}

function FeaturedCard({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-8 items-center bg-surface border border-border rounded-3xl overflow-hidden p-6 md:p-8">
        {/* Image */}
        <div
          className={`rounded-2xl overflow-hidden border border-border bg-surface-2 ${
            reversed ? "md:order-2" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover aspect-video"
          />
        </div>

        {/* Text */}
        <div className={reversed ? "md:order-1" : ""}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-accent border border-accent/40 rounded-full px-3 py-1">
              {project.tag}
            </span>
            <span className="text-xs text-ink-faint">{project.role}</span>
          </div>
          <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
          <p className="text-ink-muted text-sm leading-relaxed">
            {project.description}
          </p>
          {project.stack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-ink-muted border border-border rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function OtherCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <div className="bg-surface border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent/50 transition-colors">
        <div className="border-b border-border bg-surface-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full object-cover aspect-video"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium">{project.title}</h3>
            <span className="text-[11px] text-accent border border-accent/40 rounded-full px-2 py-0.5">
              {project.tag}
            </span>
          </div>
          <p className="text-ink-muted text-sm leading-relaxed flex-1">
            {project.description}
          </p>
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionHeading eyebrow="Browse My Recent" title="Projects" />

      {/* Featured */}
      <div className="flex flex-col gap-8">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedCard
            key={project.title}
            project={project}
            reversed={i % 2 === 1}
          />
        ))}
      </div>

      {/* Other */}
      <Reveal>
        <h3 className="text-xl font-medium text-center mt-20 mb-8">
          Other Projects
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {OTHER_PROJECTS.map((project) => (
          <OtherCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}