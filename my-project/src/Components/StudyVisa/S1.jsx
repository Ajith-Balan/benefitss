import React from "react";

const S1 = () => {
  const countryRequirements = {
    usa: [
      "Valid passport",
      "Proof of financial support",
      "Acceptance letter from a recognized institution",
      "English proficiency test score (TOEFL/IELTS)",
    ],
    canada: [
      "Valid passport",
      "Study permit",
      "Acceptance letter from a designated learning institution",
      "Proof of financial resources",
      "Medical exam (if required)",
    ],
    uk: [
      "Valid passport",
      "Tier 4 (General) student visa",
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of English language proficiency",
      "Evidence of sufficient funds",
    ],
    australia: [
      "Valid passport",
      "Student visa (subclass 500)",
      "Offer letter from a registered Australian institution",
      "Overseas Student Health Cover (OSHC)",
      "Proof of English language proficiency",
    ],
    England: [
        "Valid passport",
        "Student visa (subclass 500)",
        "Offer letter from a registered Australian institution",
        "Overseas Student Health Cover (OSHC)",
        "Proof of English language proficiency",
      ],
      UAE: [
        "Valid passport",
        "Tier 4 (General) student visa",
        "Confirmation of Acceptance for Studies (CAS)",
        "Proof of English language proficiency",
        "Evidence of sufficient funds",
      ],
  };

  return (
    <div className=" min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Country-wise Visa Requirements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(countryRequirements).map(([country, requirements]) => (
          <div
            key={country}
            className="bg-white border border-gray-300  p-6 hover:border-red-500 transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-500 capitalize mb-4">
              {country === "usa" ? "United States" : country}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default S1;
