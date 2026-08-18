export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6 pt-16 pb-24 md:px-8"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-text md:text-6xl">
          Arav Narwal
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          Chasing the edge of technology and what it means for the future of
          humanity.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded bg-honey px-5 py-2.5 text-sm text-bg transition-colors hover:bg-[#d4822f]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded border border-border bg-surface px-5 py-2.5 text-sm text-text transition-colors hover:border-sea hover:text-sea"
          >
            Connect
          </a>
        </div>
      </div>
    </section>
  )
}
