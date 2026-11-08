import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
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
  const [searchParams] = useSearchParams()
  const requested = searchParams.get('service')

  const [form, setForm] = useState({
    name: '',
    phone: '',
    // Preselect only if the address contains a valid service, otherwise ask them to choose
    service: serviceOptions.includes(requested) ? requested : '',
    message: '',
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const isOther = form.service === 'Other'

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
    'w-full rounded-xl border border-mint-deep bg-white px-4 py-3 text-ink outline-none transition focus:border-ink focus:ring-2 focus:ring-mint-deep'

  const iconBox =
    'flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf-dark'

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-leaf-dark">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
            Book Your Cleaning Service Today
          </h2>
          <p className="mt-4 text-ink/70">
            Fill in the form and we'll receive your request on WhatsApp, or reach us directly
            using the details below.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-4">
              <span className={iconBox}>
                <Phone size={20} />
              </span>
              <a href="tel:03288129327" className="font-medium text-ink hover:text-leaf-dark">
                0328 8129327
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className={iconBox}>
                <Mail size={20} />
              </span>
              <a
                href="mailto:mastercleaners@gmail.com"
                className="font-medium text-ink hover:text-leaf-dark"
              >
                mastercleaners@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className={iconBox}>
                <MapPin size={20} />
              </span>
              <span className="font-medium text-ink">DHA Phase 1, Lahore, Pakistan</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-mint p-6 md:p-8">
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
          <select
            name="service"
            value={form.service}
            onChange={update}
            required
            className={`${inputClass} ${form.service === '' ? 'text-ink/50' : ''}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            required={isOther}
            rows={4}
            placeholder={
              isOther
                ? 'Please tell us what service you need'
                : 'Tell us about your property and what you need (optional)'
            }
            className={inputClass}
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-leaf-dark"
          >
            <MessageCircle size={20} /> Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}