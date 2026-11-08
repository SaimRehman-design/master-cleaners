import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="bg-teal-500 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Ready for a spotless space?
          </h2>
          <p className="mt-2 text-teal-50">
            Book Your Cleaning Service Today and let Master Cleaners take care of the rest.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-teal-600 shadow-lg transition hover:bg-teal-50"
        >
          Book Now
        </Link>
      </div>
    </section>
  )
}