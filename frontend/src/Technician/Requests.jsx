const requests = {
  new: [
    { id: 1, title: "Printer not working", equipment: "Printer 01" },
    { id: 2, title: "Oil leakage", equipment: "CNC Machine" },
  ],
  progress: [
    { id: 3, title: "Laptop screen issue", equipment: "Laptop - John" },
  ],
  done: [
    { id: 4, title: "Network outage", equipment: "Office Router" },
  ],
}

const Column = ({ title, items, color }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 w-1/3">
      <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600"
          >
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400">{item.equipment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Requests = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Maintenance Requests</h2>

      <div className="flex gap-6">
        <Column
          title="New"
          items={requests.new}
          color="text-red-400"
        />
        <Column
          title="In Progress"
          items={requests.progress}
          color="text-yellow-400"
        />
        <Column
          title="Repaired"
          items={requests.done}
          color="text-green-400"
        />
      </div>
    </div>
  )
}

export default Requests
