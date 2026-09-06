import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="About" />
        </FadeIn>

        <FadeIn delay={75}>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              CS student at Stevens Institute of Technology. Skilled in Java,
              Python, C++, Scheme, and Visual Basic. Passionate about AI,
              emerging technology, and building software.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
