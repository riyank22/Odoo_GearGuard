const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Maintenance Dashboard</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <p className="text-gray-400">Open Requests</p>
          <h3 className="text-3xl font-bold text-red-400">12</h3>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <p className="text-gray-400">In Progress</p>
          <h3 className="text-3xl font-bold text-yellow-400">5</h3>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <p className="text-gray-400">Completed</p>
          <h3 className="text-3xl font-bold text-green-400">20</h3>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
