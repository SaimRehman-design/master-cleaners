const items = [
  'Deep cleaning result',
  'Living room cleaning',
  'Window cleaning',
  'Exterior cleaning',
  'High-rise window cleaning',
  'Kitchen cleaning',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-mint py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-leaf-dark">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
            Spotless Results
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((label) => (
            <div
              key={label}
              className="flex aspect-square items-center justify-center rounded-2xl bg-mint-deep p-4 text-center text-sm font-semibold text-ink/50"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}