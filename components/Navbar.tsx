export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="font-bold text-xl">Vipers Projects</h1>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg border">Masuk</button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
          Daftar
        </button>
      </div>
    </nav>
  )
}