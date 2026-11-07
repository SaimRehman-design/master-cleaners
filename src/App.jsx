import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}