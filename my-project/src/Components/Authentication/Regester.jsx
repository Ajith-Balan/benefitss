import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    referredBy: "",
    subscription:"pending"
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3003/api/regester", formData);
      toast.success(`Registration successful! Your referral code is ${response.data.referralCode}`);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during the registration process.");
    }
  };

 
  
  return (
    <div className="font-[sans-serif] bg-white flex items-center md:h-screen p-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 md:gap-16 gap-8 bg-gray-50 shadow w-full sm:p-8 p-6 relative">
          <div>
            <div className="md:mb-16 mb-8">
              <a href="#"><img
                src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png" alt="logo" className="w-40 inline-block" />
              </a>
            </div>

            <div className="md:space-y-8 space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 bg-blue-600 fill-white rounded-full p-1 shrink-0" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                </svg>
                <h4 className="text-gray-800 text-base">Create Your Account</h4>
              </div>
            </div>
          </div>

          <form className="md:max-w-sm w-full mx-auto" onSubmit={handleSubmit}>
            <div className="md:mb-8 mb-6">
              <h3 className="text-gray-800 text-2xl font-bold">Register</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-2.5 rounded focus:border-black outline-none"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-2.5 rounded focus:border-black outline-none"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-2.5 rounded focus:border-black outline-none"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                <input
                  name="cpassword"
                  type="password"
                  required
                  value={formData.cpassword}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-2.5 rounded focus:border-black outline-none"
                  placeholder="Confirm password"
                />
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">referredBy</label>
                <input
                  name="referredBy"
                  type="text"
                  required
                  value={formData.referredBy}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-2.5 rounded focus:border-black outline-none"
                  placeholder="Refferal id"
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded font-bold hover:bg-blue-700 transition">Register</button>
          
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
