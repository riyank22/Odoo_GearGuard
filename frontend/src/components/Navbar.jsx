const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("auth")
    window.location.href = "/login"
  }

  return (
    <header className="h-14 bg-gray-800 flex items-center justify-end px-6 gap-4">
      <span className="text-sm text-gray-300">Technician</span>
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
