import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Css/Cards.css";
import { Link } from "react-router-dom";

const Country = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3003/api/getcountry");
        setCardDetails(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, []);

  // Delete function
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this country?")) return;

    try {
      await axios.delete(`http://localhost:3003/api/deletecountry/${id}`);
      setCardDetails((prev) => prev.filter((card) => card._id !== id));
    } catch (err) {
      alert("Failed to delete country");
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-7 sm:p-6 border-b mt-10">
      <h1 className="font-barlow text-5xl font-semibold text-teal-500 p-6">
        Countries we deal with
      </h1>
      <hr className="mb-5 mt-5" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 w-full p-6">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Countries to <span className="text-teal-500">visit</span>,{" "}
            <span className="text-teal-500">Work</span>, and{" "}
            <span className="text-teal-500">Study</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-barlow">
            Explore the top destinations for visas with expert support to help
            you succeed in work, study, and travel opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-2 py-5">
          {cardDetails.map((card) => (
            <div key={card._id} className="flex flex-col items-center">
              <Link to={`/country-details/${card._id}`} className="w-full">
                <div className="flip-card w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center bg-white border p-6 overflow-hidden h-36 w-36">
                      <img
                        src={card.photo}
                        alt={card.Country}
                        className="w-full h-3/4 object-cover"
                      />
                      <h2 className="text-lg sm:text-xl font-bold py-2 text-center">
                        {card.Country}
                      </h2>
                    </div>
                    <div className="flip-card-back bg-blue-600 text-white flex flex-col justify-center items-center">
                      <h2 className="text-2xl font-bold mb-2">{card.Country}</h2>
                      <p className="text-sm sm:text-base">
                        <strong>Visit Visa:</strong> {card.Visitvisa}
                      </p>
                      <p className="text-sm sm:text-base mt-1">
                        <strong>Work Visa:</strong> {card.Workvisa}
                      </p>
                      <p className="text-sm sm:text-base mt-1">
                        <strong>Study Visa:</strong> {card.Studyvisa}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(card._id)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
