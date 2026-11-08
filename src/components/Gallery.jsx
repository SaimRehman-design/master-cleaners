import deepCleaning from '../assets/images/gallery-deep-cleaning.jpg'
import livingRoom from '../assets/images/gallery-living-room.jpg'
import windowCleaning from '../assets/images/gallery-window-cleaning.jpg'
import exterior from '../assets/images/gallery-exterior.jpg'
import highRise from '../assets/images/gallery-high-rise.jpg'
import kitchen from '../assets/images/gallery-kitchen.jpg'

const items = [
  { src: deepCleaning, label: 'Deep cleaning', alt: 'Deep cleaning of a bathroom in Lahore' },
  { src: livingRoom, label: 'Living room cleaning', alt: 'Freshly cleaned living room' },
  { src: windowCleaning, label: 'Window cleaning', alt: 'Professional window cleaning with a squeegee' },
  { src: exterior, label: 'Exterior cleaning', alt: 'Exterior and patio cleaning' },
  { src: highRise, label: 'High-rise window cleaning', alt: 'High-rise window cleaning on a tall building' },
  { src: kitchen, label: 'Kitchen cleaning', alt: 'Spotless kitchen after professional cleaning' },
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
          {items.map(({ src, label, alt }) => (
            <figure
              key={label}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-mint-deep"
            >
              <img
                src={src}
                alt={alt}
                width="1000"
                height="1000"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-semibold text-white">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}