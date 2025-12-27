import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleRegister}
        className="bg-gray-800 p-8 rounded-xl w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded bg-gray-700"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-700"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-700"
          required
        />

        <button className="w-full bg-green-500 p-3 rounded font-bold">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default Register
