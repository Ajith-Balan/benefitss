import React, { useState } from "react";
import axios from "axios";

const Addnews = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "", 
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(""); 

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

    if (type === "file" && files.length > 0) {
      const base64 = await convertToBase64(files[0]);
      setFormData((prev) => ({
        ...prev,
        image: base64, 
      }));
      setPreview(base64); 
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
      const response = await axios.post("http://localhost:3003/api/addnews", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data.message);
      setError("");
      setFormData({ title: "", image: "" });
      setPreview("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setMessage("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-teal-600">Add News</h1>

      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            News Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

            <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
        </div>

           {preview && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">Image Preview:</p>
            <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md shadow" />
          </div>
        )}

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

export default Addnews;
