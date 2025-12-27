import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
      <aside className="w-64 bg-gray-800 p-5 text-white">
        <h1 className="text-2xl font-bold text-green-400 mb-6">
          GearGuard
        </h1>

        <ul className="space-y-4">
          {/* Maintenance only */}
          {user?.user_type === "Maintenance" && (
              <li>
                <Link to="/" className="hover:text-green-400">
                  Dashboard
                </Link>
              </li>
          )}

          {/* All users */}
          <li>
            <Link to="/equipment" className="hover:text-green-400">
              Equipment
            </Link>
          </li>

          {/* Admin + Maintenance */}
          {(user?.user_type === "Admin" ||
              user?.user_type === "Maintenance") && (
              <li>
                <Link to="/requests" className="hover:text-green-400">
                  Requests
                </Link>
              </li>
          )}

          {/* Maintenance only */}
          {user?.user_type === "Maintenance" && (
              <li>
                <Link to="/calendar" className="hover:text-green-400">
                  Calendar
                </Link>
              </li>
          )}
        </ul>
      </aside>
  );
};

export default Sidebar;
