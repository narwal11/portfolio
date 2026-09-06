import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C++', 'Scheme', 'Visual Basic', 'R'],
  },
  {
    title: 'Tools',
    items: ['React', 'Git', 'GitHub', 'AWS', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Learning',
    items: ['Machine Learning', 'AI development', 'Front-end and Back-end development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Skills" />
        </FadeIn>

        <div className="space-y-4">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 75}>
              <article className="rounded-lg border border-border bg-surface p-6 md:p-8">
                <h3 className="mb-3 text-base font-bold text-text">{group.title}</h3>
                <p className="text-muted">{group.items.join(', ')}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
