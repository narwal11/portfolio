import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'

const links = [
  {
    label: 'Email',
    value: 'narwalarav@gmail.com',
    href: 'mailto:narwalarav@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/narwal11',
    href: 'https://github.com/narwal11',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/arav-narwal-8b58b8314',
    href: 'https://linkedin.com/in/arav-narwal-8b58b8314/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Contact" />
        </FadeIn>

        <FadeIn delay={75}>
          <p className="mb-8 text-base text-muted md:text-lg">
            Open to opportunities, collaborations, and conversations.
          </p>
        </FadeIn>

        <ul className="space-y-4">
          {links.map((link, index) => (
            <FadeIn key={link.label} delay={100 + index * 50}>
              <li>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'
                  }
                  className="group block rounded-lg border border-border bg-surface p-6 md:p-8"
                >
                  <span className="mb-1 block text-sm text-muted">{link.label}</span>
                  <span className="text-text transition-colors group-hover:text-sea">
                    {link.value}
                  </span>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
