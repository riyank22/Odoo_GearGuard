import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import ProtectedRoute from "./components/ProtectedRoute"

import Dashboard from "./Technician/Dashboard.jsx"
import Equipment from "./employee/Equipment"
import Requests from "./Technician/Requests.jsx"
import Calendar from "./Technician/Calendar.jsx"
import Login from "./Login.jsx"
import Register from "./employee/Register"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
