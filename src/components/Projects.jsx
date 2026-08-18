import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Projects" />
        </FadeIn>

        <FadeIn delay={75}>
          <article className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="mb-6 text-base text-muted md:text-lg">
              Projects coming soon — currently building.
            </p>
            <a
              href="https://github.com/narwal11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-honey transition-colors hover:text-sea"
            >
              github.com/narwal11
            </a>
          </article>
        </FadeIn>
      </div>
    </section>
  )
}
