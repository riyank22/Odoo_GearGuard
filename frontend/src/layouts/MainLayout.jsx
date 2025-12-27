import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
