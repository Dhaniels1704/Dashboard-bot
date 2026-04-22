import { IconBot, IconQR, IconSpeed } from './icons'

export default function Features() {
  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
      <div className="p-6 rounded-xl border">
        <IconBot />
        <h3>Multi Platform</h3>
      </div>

      <div className="p-6 rounded-xl border">
        <IconQR />
        <h3>QRIS Otomatis</h3>
      </div>

      <div className="p-6 rounded-xl border">
        <IconSpeed />
        <h3>Realtime</h3>
      </div>
    </section>
  )
}
