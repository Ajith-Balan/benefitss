import React, { useState } from "react";
import emailjs from "emailjs-com";
import J1 from "../JobVisa/J1";
import J2 from "../JobVisa/J2";



const Job = () => {
  const [formData, setFormData] = useState({
    name: "",
    visatype: "Work Visa",
    country: "",
    countryCode: "",
    phone: "",
    email: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();

     const templateParams = {
      name: formData.name,
      visatype: formData.visatype,
      country: formData.country,
      countryCode: formData.countryCode,
      phone: formData.phone,
      email: formData.email,
      terms: formData.terms ? "Accepted" : "Not Accepted",
    };

    emailjs
      .send("service_r74e53r", "template_y8v5nz9", templateParams, "DXIWuxbV9blr57MhN")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
                },
        (error) => {
          console.error("Email sending failed!", error);
        }
      );
  };

  return (
    <div className="bg-white min-h-full mx-auto p-3 sm:px-6 md:px-12">
      <div className="container max-w-full bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-12 border">
        <div className="relative">
          <img
            src="https://images.huffingtonpost.com/2015-12-14-1450098850-1542645-Lookingforajob.jpg"
            alt="Visa Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bg-black bg-opacity-70 flex items-center justify-center"></div>
        </div>
        <div className="p-6 sm:p-8 lg:p-12 border">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Are you looking for a job  ?
          </h2>
          <form className="space-y-6 p-7" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                I am
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
              />
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                looking for
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Visa Type
              </label>
              <select
                name="visatype"
                value={formData.visatype}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
              >
            
              
                <option value="study">Work Visa</option>
             
              </select>
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Visa For
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Select country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
              >
                <option value="" disabled>
                  Select country
                </option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Contact me at
              </label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-full sm:w-24 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+86">+86 (China)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full sm:w-48 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                My email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                Accept terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 px-8 border border-red-500 hover:bg-red-600 hover:text-white transition duration-300 w-full mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <J1/>
      <J2/>
       </div>
  );
};

export default Job;