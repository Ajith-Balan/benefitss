import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // For a close button icon (or use any other icon library)

const Floating = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={showForm ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`${
        showForm ? "fixed" : "hidden"
      } top-1  transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-lg w-96 p-6 z-50`}
    >
      {/* Close Button */}
      <div className="flex justify-center">
        <button
          onClick={closeForm}
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            placeholder="Your message"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Floating;

