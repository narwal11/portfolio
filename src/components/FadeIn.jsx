import { useInView } from '../hooks/useInView'

export default function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ease-out ${
        isInView ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
