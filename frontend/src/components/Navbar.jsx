import {useEffect} from "react";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("auth")
    window.location.href = "/login"
  }

  let user = null
    useEffect(() => {
        user = localStorage.getItem("user")
    }, []);

  return (
    <header className="h-14 bg-gray-800 flex items-center justify-end px-6 gap-4">
      <span className="text-sm text-gray-300">
      {user?.userType === "Maintenance" ? "Technician" : "Employee"}
    </span>
      <button
        onClick={logout}
        className="text-red-400 hover:underline text-sm"
      >
        Logout
      </button>
    </header>
  )
}

export default Navbar
