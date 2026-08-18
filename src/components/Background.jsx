import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

export default function Background() {
  return (
    <section id="background" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Background" />
        </FadeIn>

        <FadeIn delay={75}>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              I have worked in warehouse and supply chain operations, customer
              service, and food service. That experience grounds my perspective
              on technology and people.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
