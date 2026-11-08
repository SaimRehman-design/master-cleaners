import { Link } from 'react-router-dom'
import {
  Sparkles,
  Home,
  DoorOpen,
  Building2,
  AppWindow,
  SprayCan,
  ArrowUpFromLine,
} from 'lucide-react'

const services = [
  {
    title: 'Deep Cleaning',
    desc: 'Thorough top-to-bottom cleaning that reaches every corner, ideal for move-ins and seasonal refreshes.',
    icon: Sparkles,
  },
  {
    title: 'General Cleaning',
    desc: 'Regular upkeep for homes and offices so your space stays fresh, tidy and welcoming.',
    icon: Home,
  },
  {
    title: 'Interior Cleaning',
    desc: 'Careful cleaning of rooms, floors, surfaces and fixtures inside your property.',
    icon: DoorOpen,
  },
  {
    title: 'Exterior Cleaning',
    desc: 'Restore the look of patios, walls, entrances and outdoor areas.',
    icon: Building2,
  },
  {
    title: 'Window Cleaning',
    desc: 'Streak-free, crystal-clear windows that let the light in.',
    icon: AppWindow,
  },
  {
    title: 'Inside & Outside Window Washing',
    desc: 'Complete window washing on both sides, including frames and sills.',
    icon: SprayCan,
  },
]

export default function Services({ preview = false }) {
  const list = preview ? services.slice(0, 3) : services

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-leaf-dark">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
            Cleaning Solutions for Every Space
          </h2>
          <p className="mt-4 text-ink/70">
            From homes to high-rise buildings, we have a service to match your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-mint-deep bg-mint p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-leaf transition group-hover:bg-ink group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{desc}</p>
              <Link
                to={`/contact?service=${encodeURIComponent(title)}`}
                className="mt-4 inline-block text-sm font-semibold text-ink underline-offset-4 hover:text-leaf-dark hover:underline"
              >
                Book this service →
              </Link>
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-block rounded-full border border-ink px-8 py-3 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              View All 7 Services
            </Link>
          </div>
        )}

        {!preview && (
          <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl bg-ink p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-leaf text-white">
                <ArrowUpFromLine size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  High-Rise Window Cleaning
                </h3>
                <p className="mt-2 max-w-xl text-white/70">
                  Safe, professional cleaning for tall buildings and hard-to-reach glass, done
                  with the right equipment and trained crews.
                </p>
              </div>
            </div>
            <Link
  to={`/contact?service=${encodeURIComponent('High-Rise Window Cleaning')}`}
  className="shrink-0 rounded-full bg-mint px-7 py-3 font-semibold text-ink transition hover:bg-white"
>
  Request a Quote
</Link>
          </div>
        )}
      </div>
    </section>
  )
}