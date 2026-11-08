import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-teal-600 ${
      isActive ? 'text-teal-600' : 'text-slate-600'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 font-medium hover:bg-teal-50 ${
      isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-700'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-white">
            <Sparkles size={20} />
          </span>
          Master Cleaners
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-slate-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="space-y-1 border-t border-slate-100 bg-white px-5 pb-5 pt-3 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={mobileLinkClass}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-teal-500 px-5 py-3 text-center font-semibold text-white"
            >
              Book Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}