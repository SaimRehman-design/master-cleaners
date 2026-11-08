import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="bg-mint py-20 md:py-32">
      <Seo
        title="Page Not Found | Master Cleaners"
        description="The page you are looking for could not be found. Return to the Master Cleaners homepage."
      />
      <div className="mx-auto max-w-2xl px-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-leaf-dark">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink md:text-5xl">Page not found</h1>
        <p className="mt-4 text-ink/70">
          Sorry, we couldn't find the page you were looking for. It may have been moved, or the
          address may have a typo.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-ink px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-leaf-dark"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-ink/20 bg-white px-8 py-4 font-semibold text-ink transition hover:border-ink"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}