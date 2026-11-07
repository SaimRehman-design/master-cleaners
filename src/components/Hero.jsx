import { Phone, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-teal-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-700">
            Professional Cleaning Services in Lahore
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            A Cleaner Space. <span className="text-teal-500">A Better Life.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Whether you need a one-time deep clean, regular cleaning, spotless windows, or
            professional high-rise window cleaning, Master Cleaners is ready to help.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-teal-500 px-8 py-4 text-center font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
            >
              Book Your Cleaning Service Today
            </a>
            <a
              href="tel:03288129327"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-600"
            >
              <Phone size={18} /> 0328 8129327
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {['Trained professionals', 'Reliable service', 'Homes & offices'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-500" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Image placeholder: we'll swap in real photography later */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-teal-200 to-teal-400 text-lg font-semibold text-white shadow-xl">
          Cleaning photo goes here
        </div>
      </div>
    </section>
  )
}
