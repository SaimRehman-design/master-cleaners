import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '923288129327' // 0328 8129327 in international format
const MESSAGE = "Hello Master Cleaners, I'd like to know more about your cleaning services."

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Master Cleaners on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle size={28} />
    </a>
  )
}