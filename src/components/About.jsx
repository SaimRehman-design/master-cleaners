import { CheckCircle2 } from 'lucide-react'

const points = [
  'Based in DHA Phase 1, Lahore',
  'Homes, offices and high-rise buildings',
  'One-time and regular cleaning plans',
]

export default function About() {
  return (
    <section id="about" className="bg-teal-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        {/* Image placeholder: real photo comes later */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-teal-300 to-teal-500 text-lg font-semibold text-white shadow-xl">
          Team photo goes here
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Lahore's Trusted Cleaning Professionals
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Master Cleaners provides professional cleaning services across Lahore. Whether you
            need a one-time deep clean, regular cleaning, spotless windows, or professional
            high-rise window cleaning, we are ready to help.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 size={20} className="shrink-0 text-teal-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}