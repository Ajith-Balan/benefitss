import React from "react";

const V1 = () => {
  const countries = [
    {
      name: "USA",
      status: "Open",
      requirements: [
        "Valid Passport",
        "DS-160 Form",
        "Interview Appointment",
      ],
    },
    {
      name: "Canada",
      status: "Open",
      requirements: [
        "Valid Passport",
        "Proof of Funds",
        "Travel History",
      ],
    },
    {
      name: "Germany",
      status: "Restricted",
      requirements: [
        "Valid Passport",
        "Travel Insurance",
        "Invitation Letter",
      ],
    },
    {
      name: "China",
      status: "Open",
      requirements: [  "Valid Passport",
        "Travel Insurance",
        "Invitation Letter",],
    },
    {
        name: "Japan",
        status: "Closed",
        requirements: ["N/A (Borders Currently Closed)"],
      },
      {
        name: "London",
        status: "Restricted",
        requirements: ["N/A (Borders Currently Closed)"],
      },
  ];

  return (
    <div className="container mx-auto mt-10 bg-transparant p-8 border ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Visiting Visa Status & Requirements
      </h1>
      <p className="text-md font-bold text-gray-600 mb-8">
        Stay updated with the latest visiting visa statuses and requirements for different countries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-6  transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {country.name}
            </h2>
            <p
              className={`text-sm font-bold mb-4 ${
                country.status === "Open"
                  ? "text-green-600"
                  : country.status === "Restricted"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              Status: {country.status}
            </p>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Requirements:
            </h3>
            <ul className="list-disc list-inside text-gray-500">
              {country.requirements.map((requirement, idx) => (
                <li key={idx}>{requirement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default V1;
