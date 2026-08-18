import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

const education = [
  {
    institution: 'Stevens Institute of Technology',
    detail: 'B.S. Computer Science, Expected 2028',
  },
  {
    institution: 'Monroe Township High School',
    detail: '2021–2025',
  },
]

const certifications = [
  'Anthropic AI Certifications',
  'AWS AI Engineer Certificate',
]

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Education & Certifications" />
        </FadeIn>

        <div className="space-y-4">
          {education.map((item, index) => (
            <FadeIn key={item.institution} delay={index * 75}>
              <article className="rounded-lg border border-border bg-surface p-6 md:p-8">
                <h3 className="mb-1 text-base font-bold text-text">
                  {item.institution}
                </h3>
                <p className="text-muted">{item.detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={150}>
          <div className="mt-4 rounded-lg border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-4 text-base font-bold text-text">Certifications</h3>
            <ul className="space-y-2 text-muted">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
