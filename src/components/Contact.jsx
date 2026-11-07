import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '923288129327' // 0328 8129327 in international format

const serviceOptions = [
  'Deep Cleaning',
  'General Cleaning',
  'Interior Cleaning',
  'Exterior Cleaning',
  'Window Cleaning',
  'Inside & Outside Window Washing',
  'High-Rise Window Cleaning',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text =
      `Hello Master Cleaners, I would like to book a cleaning service.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Service: ${form.service}\n` +
      `Details: ${form.message || 'N/A'}`
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank'
    )
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100'

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Book Your Cleaning Service Today
          </h2>
          <p className="mt-4 text-slate-600">
            Fill in the form and we'll receive your request on WhatsApp, or reach us directly
            using the details below.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <Phone size={20} />
              </span>
              <a href="tel:03288129327" className="font-medium text-slate-800 hover:text-teal-600">
                0328 8129327
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <Mail size={20} />
              </span>
              <a
                href="mailto:mastercleaners@gmail.com"
                className="font-medium text-slate-800 hover:text-teal-600"
              >
                mastercleaners@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <MapPin size={20} />
              </span>
              <span className="font-medium text-slate-800">DHA Phase 1, Lahore, Pakistan</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-teal-50 p-6 md:p-8">
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Your name"
            className={inputClass}
          />
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            required
            placeholder="Your phone number"
            className={inputClass}
          />
          <select name="service" value={form.service} onChange={update} className={inputClass}>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            rows={4}
            placeholder="Tell us about your property and what you need (optional)"
            className={inputClass}
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-4 font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            <MessageCircle size={20} /> Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}