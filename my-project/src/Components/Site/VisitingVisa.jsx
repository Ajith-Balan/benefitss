import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisitingVisa = () => {
  const countries = [
    "USA", "Canada", "Germany", "France", "Italy", "Spain", "Japan", "Australia",
    "India", "Brazil", "South Korea", "Mexico"
  ];

  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div
      className="container mx-auto mt-10 bg-white p-8 border border-gray-200"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6" data-aos="fade-right">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight font-space-grotesk">
            Visiting Visa Consultancy by Country
          </h1>
          <p className="text-sm font-semibold text-gray-600 font-space-grotesk">
            We offer personalized consultancy services for visiting visas. Choose the country you're interested in, and our experts will assist you in the process.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <button
                key={index}
                className="bg-white text-black font-semibold py-3 px-4 border border-red-600 hover:bg-red-600 hover:text-white transition duration-300 flex justify-center"
                data-aos="zoom-in"
              >
                {country}
              </button>
            ))}
          </div>
        </div>

              <div className="flex justify-center items-center" data-aos="fade-left">
          <img
            src="https://visamint.com/blogs/uploads/images/image_750x_5fa59adf133cb.jpg"
            alt="Visiting Visa Consultancy"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitingVisa;
