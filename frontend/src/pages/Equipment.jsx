const equipments = [
  { name: "CNC Machine", department: "Production", location: "Plant 1" },
  { name: "Printer 01", department: "Admin", location: "Office" },
  { name: "Laptop - John", department: "IT", location: "HQ" },
]

const Equipment = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Equipment</h2>

      <div className="grid grid-cols-3 gap-6">
        {equipments.map((eq, i) => (
          <div key={i} className="bg-gray-800 p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-green-400">
              {eq.name}
            </h3>
            <p className="text-gray-400">Dept: {eq.department}</p>
            <p className="text-gray-400">Location: {eq.location}</p>

            <button className="mt-4 text-sm text-blue-400 hover:underline">
              View Maintenance
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Equipment
