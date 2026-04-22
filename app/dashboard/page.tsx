export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <Card title="Total Order" value="1,240" />
        <Card title="Pendapatan" value="Rp 25jt" />
        <Card title="User" value="3,462" />
      </div>
    </div>
  )
}

function Card({ title, value }: { title: string, value: string }) {
  return (
    <div className="p-4 rounded-xl border">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  )
}
