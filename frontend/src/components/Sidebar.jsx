import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-5">
      <h1 className="text-2xl font-bold text-green-400 mb-6">
        GearGuard
      </h1>

      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-green-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/equipment" className="hover:text-green-400">
            Equipment
          </Link>
        </li>
        <li>
          <Link to="/requests" className="hover:text-green-400">
            Requests
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="hover:text-green-400">
            Calendar
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
