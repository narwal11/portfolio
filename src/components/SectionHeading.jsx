export default function SectionHeading({ title }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl font-bold text-text md:text-3xl">{title}</h2>
      <div className="mt-3 h-0.5 w-12 bg-honey" />
    </div>
  )
}
