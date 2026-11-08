import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '923288129327' // 0328 8129327 in international format
const BUSINESS_EMAIL = 'mastercleaners@gmail.com'

const serviceOptions = [
  'Deep Cleaning',
  'General Cleaning',
  'Interior Cleaning',
  'Exterior Cleaning',
  'Window Cleaning',
  'Inside & Outside Window Washing',
  'High-Rise Window Cleaning',
]

// Validation rules
const nameRegex = /^[A-Za-z\u0600-\u06FF][A-Za-z\u0600-\u06FF\s.'-]+$/
const phoneRegex = /^03\d{9}$/ // 11 digits starting with 03
const emailRegex = /^[^\s@.]+(\.[^\s@.]+)*@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/

export default function Contact() {
  const [searchParams] = useSearchParams()
  const requested = searchParams.get('service')

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    // Preselect only if the address contains a valid service, otherwise ask them to choose
    service: serviceOptions.includes(requested) ? requested : '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const isOther = form.service === 'Other'

  const update = (e) => {
    const { name } = e.target
    let { value } = e.target

    // Phone box: numbers only, max 11 digits
    if (name === 'phone') value = value.replace(/\D/g, '').slice(0, 11)

    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' }) // clear that field's error
  }

  const validate = () => {
    const errs = {}
    if (!nameRegex.test(form.name.trim()) || form.name.trim().length < 2) {
      errs.name = 'Please enter your name using letters only.'
    }
    if (!phoneRegex.test(form.phone)) {
      errs.phone = 'Enter a valid 11-digit mobile number starting with 03, e.g. 03001234567.'
    }
    if (!emailRegex.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address, e.g. name@example.com.'
    }
    if (!form.service) {
      errs.service = 'Please select a service.'
    }
    if (isOther && !form.message.trim()) {
      errs.message = 'Please tell us what service you need.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const buildMessage = () =>
    `Hello Master Cleaners, I would like to book a cleaning service.\n\n` +
    `Name: ${form.name.trim()}\n` +
    `Phone: ${form.phone}\n` +
    `Email: ${form.email.trim()}\n` +
    `Service: ${form.service}\n` +
    `Details: ${form.message.trim() || 'N/A'}`

  // Submit button = WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`,
      '_blank'
    )
  }

  // Email button
  const handleEmail = () => {
    if (!validate()) return
    const subject = `Booking request: ${form.service}`
    window.location.href =
      `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(buildMessage())}`
  }

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition focus:ring-2 ${
      errors[field]
        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
        : 'border-mint-deep focus:border-ink focus:ring-mint-deep'
    }`

  const iconBox =
    'flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf-dark'

  const ErrorText = ({ field }) =>
    errors[field] ? <p className="mt-1.5 text-sm text-red-600">{errors[field]}</p> : null

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
            Fill in the form and send your request by WhatsApp or email, or reach us directly
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
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-medium text-ink hover:text-leaf-dark"
              >
                {BUSINESS_EMAIL}
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

        <form
          noValidate
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl bg-mint p-6 md:p-8"
        >
          <div>
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Your name"
              className={inputClass('name')}
            />
            <ErrorText field="name" />
          </div>

          <div>
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={11}
              value={form.phone}
              onChange={update}
              placeholder="Mobile number (e.g. 03001234567)"
              className={inputClass('phone')}
            />
            <ErrorText field="phone" />
          </div>

          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="Your email address"
              className={inputClass('email')}
            />
            <ErrorText field="email" />
          </div>

          <div>
            <select
              name="service"
              value={form.service}
              onChange={update}
              className={`${inputClass('service')} ${form.service === '' ? 'text-ink/50' : ''}`}
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
            <ErrorText field="service" />
          </div>

          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows={4}
              placeholder={
                isOther
                  ? 'Please tell us what service you need'
                  : 'Tell us about your property and what you need (optional)'
              }
              className={inputClass('message')}
            />
            <ErrorText field="message" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-leaf-dark"
            >
              <MessageCircle size={20} /> Book via WhatsApp
            </button>
            <button
              type="button"
              onClick={handleEmail}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink bg-white px-6 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              <Mail size={20} /> Book via Email
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}