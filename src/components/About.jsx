import { CheckCircle2 } from 'lucide-react'
import aboutImg from '../assets/images/about-team.jpg'
const points = [
  'Based in DHA Phase 1, Lahore',
  'Homes, offices and high-rise buildings',
  'One-time and regular cleaning plans',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
      <img
        src={aboutImg}
        alt="Master Cleaners team cleaning a home in Lahore"
        width="1200"
        height="900"
        loading="lazy"
        className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
      />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-leaf-dark">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
            Lahore's Trusted Cleaning Professionals
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            Master Cleaners provides professional cleaning services across Lahore. Whether you
            need a one-time deep clean, regular cleaning, spotless windows, or professional
            high-rise window cleaning, we are ready to help.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink">
                <CheckCircle2 size={20} className="shrink-0 text-leaf" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}