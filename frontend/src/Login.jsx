import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 1. Call the API
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // 2. SUCCESS: Store the real data
        localStorage.setItem("token", data.token); // The JWT
        localStorage.setItem("user", JSON.stringify(data.user)); // Name, Role, ID

        // 3. Redirect
        navigate("/");
      } else {
        // 4. ERROR: Show message from backend (e.g., "Invalid email")
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Cannot connect to server. Is the backend running on port 5000?");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
          GearGuard Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-700"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-green-500 p-3 rounded font-bold">
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          No account? <a href="/register" className="text-blue-400">Sign Up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
