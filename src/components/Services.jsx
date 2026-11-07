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

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Cleaning Solutions for Every Space
          </h2>
          <p className="mt-4 text-slate-600">
            From homes to high-rise buildings, we have a service to match your needs.
          </p>
        </div>

        {/* 6 cards in an even grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700"
              >
                Book this service →
              </a>
            </div>
          ))}
        </div>

        {/* Featured 7th service */}
        <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl bg-slate-900 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white">
              <ArrowUpFromLine size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                High-Rise Window Cleaning
              </h3>
              <p className="mt-2 max-w-xl text-slate-300">
                Safe, professional cleaning for tall buildings and hard-to-reach glass, done
                with the right equipment and trained crews.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-teal-500 px-7 py-3 font-semibold text-white transition hover:bg-teal-400"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}