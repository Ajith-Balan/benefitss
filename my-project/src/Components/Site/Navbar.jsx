import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
           <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={`/`}>
        <div className="text-2xl font-bold text-red-600 flex items-center">
            <img
              src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png"
              alt="Logo"
              className="w-full h-16 mr-4"
            />
          </div>
        </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center border-r pr-4">
              <FaPhoneAlt className="text-lg mr-2" />
              <a href="tel:+123456789" className="text-red-500">Call: 123456789</a>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-green-500 text-lg mr-2" />
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-green-500">WhatsApp</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50`}
      >
             <button
          type="button"
          className="absolute top-4 right-4 text-gray-800"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center">
              <div className="mb-4">
            <img
              src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png"
              alt="Logo"
              className="w-full h-16"
            />
          </div>

          <Link to={`/study`} className="w-full">
          <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-emerald-400 hover:border-emerald-500 mb-2">
            <a href="#link1" className="text-gray-800 group-hover:text-white font-semibold">
              Study Visa
            </a>
          </div>
          </Link>
     <Link to={`/visiting-visa`} className="w-full">
     <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-violet-400 hover:border-violet-500 mb-2">
            <a href="#link2" className="text-gray-800 group-hover:text-white font-semibold">
              Visiting Visa
            </a>
          </div>
     </Link>
         <Link to={`/job`} className="w-full">
         <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-pink-400 hover:border-pink-500 mb-2">
            <a href="#link3" className="text-gray-800 group-hover:text-white font-semibold">
              Job Consaltancy
            </a>
          </div>
         </Link>
         <Link to={`/immigration`} className="w-full">
         <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-yellow-400 hover:border-yellow-500 mb-2">
            <a href="#link4" className="text-gray-800 group-hover:text-white font-semibold">
              Immigration
            </a>
          </div>
         </Link>
         <Link to={`/user`} className="w-full">
         <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-red-400 hover:border-red-500 mb-2">
            <a href="#link5" className="text-gray-800 group-hover:text-white font-semibold">
             User
            </a>
          </div>
         </Link>
          <div className="flex items-center pr-4">
            <FaPhoneAlt className="text-lg mr-2" />
            <a href="tel:+123456789" className="text-red-500">Call: 123456789</a>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-green-500 text-lg mr-2" />
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-green-500">WhatsApp</a>
          </div>
        </div>
      </div>
           <nav className="bg-white top-16 right-0 w-auto hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-end">
          <Link to={`/`}>
          <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-emerald-400 hover:border-emerald-500">
            <a href="#link1" className="text-gray-800 group-hover:text-white font-semibold">
              Home
            </a>
          </div>
          </Link>
       <Link to={`/study`}>
       <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-emerald-400 hover:border-emerald-500">
            <a href="#link1" className="text-gray-800 group-hover:text-white font-semibold">
              Study Visa
            </a>
          </div>
       </Link>
         <Link to={`/visiting-visa`}>
         <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-violet-400 hover:border-violet-500">
            <a href="#link2" className="text-gray-800 group-hover:text-white font-semibold">
              Visiting Visa
            </a>
          </div>
         </Link>
        <Link to={`/job`}>
        <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-pink-400 hover:border-pink-500">
            <a href="#link3" className="text-gray-800 group-hover:text-white font-semibold">
              Job Consaltancy
            </a>
          </div>
        </Link>
         <Link to={`/immigration`}>
         <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-yellow-400 hover:border-yellow-500">
            <a href="#link4" className="text-gray-800 group-hover:text-white font-semibold">
              Immigration
            </a>
          </div>
         </Link>
        <Link to={`/user`}>
        <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-red-400 hover:border-red-500">
          <FaUser className="mr-1"/> User
          </div>
        </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

