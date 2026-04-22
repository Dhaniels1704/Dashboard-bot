export default function Stats() {
  return (
    <section className="py-16 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <h3 className="text-2xl font-bold">500+</h3>
        <p className="text-sm text-gray-500">Bot Aktif</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">10k+</h3>
        <p className="text-sm text-gray-500">Transaksi</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">99.9%</h3>
        <p className="text-sm text-gray-500">Uptime</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">24/7</h3>
        <p className="text-sm text-gray-500">Support</p>
      </div>
    </section>
  )
}