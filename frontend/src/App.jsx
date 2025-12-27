import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import ProtectedRoute from "./components/ProtectedRoute"

import Dashboard from "./pages/Dashboard"
import Equipment from "./pages/Equipment"
import Requests from "./pages/Requests"
import Calendar from "./pages/Calendar"
import Login from "./pages/Login"
import Register from "./pages/Register"

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
