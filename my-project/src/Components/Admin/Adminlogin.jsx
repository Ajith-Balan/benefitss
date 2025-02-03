import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3003/api/adminsignin", {
        email,
        password,
      });

      const { token, userId, role } = response.data;

      if (token && userId && role) {
        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminId", userId);
        localStorage.setItem("role", role);

        console.log("Token saved:", token);
        console.log("User ID saved:", userId);
        console.log("Role saved:", role);

        navigate("/admin");
      } else {
        setError("Invalid response from server.");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg">
      <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full mx-4">
        <div className="grid lg:grid-cols-2">
          {/* Left Section */}
          <div className="bg-gradient-to-r from-red-600 to-purple-600 p-8 text-white flex flex-col justify-center">
            <a href="/">
              <img
                src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png"
                alt="logo"
                className="w-40 mb-6"
              />
            </a>
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-sm">
              Embark on a seamless journey as you sign in to your admin account. Unlock a realm of opportunities and possibilities that await you.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-3 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-3 text-gray-400 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-red-600 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition duration-300"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;