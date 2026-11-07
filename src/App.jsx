import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

export default function App() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  )
}