export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6 pt-16 pb-24 md:px-8"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="w-full text-center md:text-left">
          <h1 className="mb-6 text-4xl font-bold text-text md:text-6xl">
            Arav Narwal
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted md:mx-0 md:text-xl mx-auto">
            Chasing the edge of technology and the future of
            humanity.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 md:justify-start">
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

        <img
          src="/headshot.jpg"
          alt="Arav Narwal"
          width={280}
          height={280}
          className="h-[280px] w-[280px] shrink-0 rounded-full object-cover"
        />
      </div>
    </section>
  )
}
