import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCog } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");

    alert("✅ Successfully logged out!");
    navigate("/adminlogin");
  };

  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
   
      <div className="w-full md:w-64 bg-gray-900 text-white p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Admin Panel</h1>
        <ul className="space-y-3 md:space-y-4">
          {[
            { path: "/users", name: "Users" },
            { path: "/orderes", name: "Orders" },
            { path: "/addcountry", name: "Add Country" },
            { path: "/addnews", name: "Add News" },
            { path: "/adminregester", name: "Add Admin" },
            { path: "/countries", name: "Countries" },
            { path: "/news", name: "Newses" },
            { path: "/refrels", name: "Referrals" },
          ].map((item, index) => (
            <Link key={index} to={item.path}>
              <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer text-center md:text-left">
                {item.name}
              </li>
            </Link>
          ))}
          <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 p-2 rounded-md mt-4">
            Logout
          </button>
        </ul>
      </div>

      <div className="flex-1 p-4 md:p-6">
       
        <header className="bg-white shadow p-4 md:p-6 rounded-lg text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">Welcome, Admin</h1>
        </header>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-6">
          {[
            { icon: <FaUser className="text-blue-500 text-4xl" />, title: "Total Users", value: "1,250" },
            { icon: <FaUser className="text-pink-500 text-4xl" />, title: "Subscribers", value: "320" },
            { icon: <FaCog className="text-purple-500 text-4xl" />, title: "System Settings", value: "Manage" },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              {card.icon}
              <div className="ml-3 md:ml-4">
                <h2 className="text-lg md:text-xl font-bold">{card.title}</h2>
                <p className="text-gray-600 text-sm md:text-lg">{card.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white mt-4 md:mt-6 p-4 md:p-6 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Recent Users</h2>
          <table className="w-full border-collapse min-w-[400px]">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm md:text-base">
                <th className="p-2 md:p-3 text-left">Name</th>
                <th className="p-2 md:p-3 text-left">Email</th>
                <th className="p-2 md:p-3 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "John Doe", email: "john@example.com", role: "User" },
                { name: "Jane Smith", email: "jane@example.com", role: "Admin" },
                { name: "Alice Brown", email: "alice@example.com", role: "Moderator" },
              ].map((user, index) => (
                <tr key={index} className="border-b text-sm md:text-base">
                  <td className="p-2 md:p-3">{user.name}</td>
                  <td className="p-2 md:p-3">{user.email}</td>
                  <td className="p-2 md:p-3">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
      <div className="fixed bottom-0 w-full md:hidden bg-gray-900 text-white p-3 flex justify-around">
        {[
          { path: "/users", name: "Users" },
          { path: "/orderes", name: "Orders" },
          { path: "/addnews", name: "News" },
          { path: "/adminregester", name: "Admins" },
        ].map((item, index) => (
          <Link key={index} to={item.path}>
            <button className="hover:text-gray-400">{item.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admin;
