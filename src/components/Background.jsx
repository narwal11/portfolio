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
            My first job was at my dad’s laundromat in Long Branch, where I helped run day-to-day operations. Since then I’ve worked food service at Six Flags Great Adventure and two roles at Home Depot. Outside of school, I do long-term investing, work on my 2016 Audi A4, and play soccer, pool, and pickup basketball. My favorite games are Cyberpunk 2077 and Tomb Raider.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
