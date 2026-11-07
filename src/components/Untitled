import { ShieldCheck, Clock, Award, Users } from 'lucide-react'

const reasons = [
  {
    title: 'Reliable',
    desc: 'We show up on time and do what we promised.',
    icon: Clock,
  },
  {
    title: 'Professional',
    desc: 'Trained staff who treat your property with care.',
    icon: Users,
  },
  {
    title: 'Quality Results',
    desc: 'Attention to detail so every space is spotless.',
    icon: Award,
  },
  {
    title: 'Safe & Trusted',
    desc: 'Safe methods and equipment, including for high-rise work.',
    icon: ShieldCheck,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Cleaning You Can Count On
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <Icon size={28} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}