import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Kanban Task Board',
    summary:
      'Full-stack task board with drag-and-drop, custom color-coded categories, and a public read-only mode.',
    detail:
      'Editing is locked behind Supabase Auth and enforced with Postgres row-level security, so visitors can view the board but can’t change it.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase (Postgres)'],
    image: '/kanban-screenshot.png',
    imageAlt: 'Kanban Task Board showing columns of color-coded task cards',
    // TODO: replace with the deployed Kanban URL
    liveUrl: 'https://simplekanbanboard.vercel.app/',
    codeUrl: 'https://github.com/narwal11/kanban-app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Projects" />
        </FadeIn>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={75 + index * 75}>
              <article className="rounded-lg border border-border bg-surface p-6 md:p-8">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="mb-6 w-full rounded border border-border"
                />
                <h3 className="mb-3 text-base font-bold text-text">{project.title}</h3>
                <p className="mb-3 text-base text-text md:text-lg">{project.summary}</p>
                <p className="mb-4 leading-relaxed text-muted">{project.detail}</p>
                <p className="mb-6 text-sm text-muted">{project.tech.join(', ')}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded bg-honey px-5 py-2.5 text-sm text-bg transition-colors hover:bg-[#d4822f]"
                  >
                    Live demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded border border-border bg-surface px-5 py-2.5 text-sm text-text transition-colors hover:border-sea hover:text-sea"
                  >
                    Code
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
