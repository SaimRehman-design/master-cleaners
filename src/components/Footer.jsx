import { Link } from 'react-router-dom'
export default function Footer() {
    return (
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-white">Master Cleaners</p>
            <p className="mt-3 text-sm">Professional cleaning services in Lahore, Pakistan.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
              <li><Link to="/services" className="hover:text-teal-400">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-400">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>0328 8129327</li>
              <li>mastercleaners@gmail.com</li>
              <li>DHA Phase 1, Lahore</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Master Cleaners. All rights reserved.
        </div>
      </footer>
    )
  }