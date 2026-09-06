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
            In my free time, I like to play soccer, climb mountains and hike, and play story mode games. I also learned how to cook after preparing meals from high school through college. At Stevens, I am part of the CS Club and the South Asian Student Association and spend a lot of time doing recreational activities with my friend, such as playing pickup basketball, pool, or walking around the city.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
