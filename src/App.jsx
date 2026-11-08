import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import AboutPage from './Pages/About'
import ServicesPage from './Pages/Servicespage'
import GalleryPage from './Pages/Gallerypage'
import ContactPage from './Pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}