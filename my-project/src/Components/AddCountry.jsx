import React, { useState } from "react";
import axios from "axios";

const AddCountry = () => {
  const [formData, setFormData] = useState({
    Country: "",
    photo: "",
    Visitvisa: "",
    Studyvisa: "",
    Workvisa: "",
    Heading: "",
    Paragraph: "",
    About: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files[0]) {
      const base64 = await convertToBase64(files[0]);
      setFormData((prev) => ({
        ...prev,
        photo: base64,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3003/api/addcountry", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Country Details</h1>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Country" className="block text-sm font-medium text-gray-700">
            Country Name
          </label>
          <input
            type="text"
            name="Country"
            id="Country"
            value={formData.Country}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Heading" className="block text-sm font-medium text-gray-700">
            Heading
          </label>
          <input
            type="text"
            name="Heading"
            id="Heading"
            value={formData.Heading}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Paragraph" className="block text-sm font-medium text-gray-700">
            Paragraph
          </label>
          <textarea
            name="Paragraph"
            id="Paragraph"
            value={formData.Paragraph}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="About" className="block text-sm font-medium text-gray-700">
            About
          </label>
          <textarea
            name="About"
            id="About"
            value={formData.About}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            Country Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Visitvisa" className="block text-sm font-medium text-gray-700">
            Visit Visa Details
          </label>
          <input
            type="text"
            name="Visitvisa"
            id="Visitvisa"
            value={formData.Visitvisa}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Studyvisa" className="block text-sm font-medium text-gray-700">
            Study Visa Details
          </label>
          <input
            type="text"
            name="Studyvisa"
            id="Studyvisa"
            value={formData.Studyvisa}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Workvisa" className="block text-sm font-medium text-gray-700">
            Work Visa Details
          </label>
          <input
            type="text"
            name="Workvisa"
            id="Workvisa"
            value={formData.Workvisa}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCountry;
