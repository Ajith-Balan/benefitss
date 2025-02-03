import React from "react";

const S2 = () => {
  return (
    <div className=" border min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl overflow-hidden">
           <div className="bg-red-600 text-white p-8">
          <h1 className="text-4xl font-bold text-center">
            Explore the World with International Promotions!
          </h1>
          <p className="mt-4 text-center text-lg">
            Take the first step towards achieving your dreams of studying abroad
            with <span className="font-semibold">Benifits Inernational</span>.
          </p>
        </div>

      
        <div className="p-8">
              <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-500 mb-4">
              Why Study Abroad?
            </h2>
            <p className="text-gray-400 font-extrabold text-lg mb-4">
              Dreaming of studying abroad? Unlock unparalleled opportunities for
              higher education, cultural exchange, and professional development.
              Our experienced team at <span className="font-bold text-red-500">Benifits international</span> ensures a smooth transition to
              your chosen destination.
            </p>
            <p className="text-gray-400 font-extrabold text-lg">
              With exclusive promotions, guidance, and comprehensive support,
              your journey to success starts here.
            </p>
          </div>

                  <div className="bg-black/10 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Why Choose Us?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">&#10003;</span>
                <span>Access to top-ranked universities and institutions worldwide.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">&#10003;</span>
                <span>Guidance on scholarship opportunities and financial aid.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">&#10003;</span>
                <span>Personalized consultation tailored to your goals.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">&#10003;</span>
                <span>Visa assistance and application support.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">&#10003;</span>
                <span>Pre-departure orientation for a seamless transition.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">&#10003;</span>
                <span>Ongoing support throughout your study journey.</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <button className="hover:bg-red-600 text-red-500 px-8 py-4 text-lg font-semibold bg-transparant border border-gray-500 hover:text-white transition duration-300">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S2;
