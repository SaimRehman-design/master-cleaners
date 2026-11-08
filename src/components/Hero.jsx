import { Link } from 'react-router-dom'
import { Phone, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-mint">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full border border-mint-deep bg-white px-4 py-1 text-sm font-semibold text-ink">
            Professional Cleaning Services in Lahore
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            A Cleaner Space. <span className="text-leaf">A Better Life.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Whether you need a one-time deep clean, regular cleaning, spotless windows, or
            professional high-rise window cleaning, Master Cleaners is ready to help.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-ink px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-leaf-dark"
            >
              Book Your Cleaning Service Today
            </Link>
            <a
              href="tel:03288129327"
              className="flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-8 py-4 font-semibold text-ink transition hover:border-ink"
            >
              <Phone size={18} /> 0328 8129327
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
            {['Trained professionals', 'Reliable service', 'Homes & offices'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-leaf" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Image placeholder: we'll swap in real photography later */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-mint-deep text-lg font-semibold text-ink/50 shadow-xl">
          Cleaning photo goes here
        </div>
      </div>
    </section>
  )
}