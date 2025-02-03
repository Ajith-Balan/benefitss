import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const JobConsultancy = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);

  return (
    <div className="container relative mx-auto mt-10 bg-white p-8 border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div
          className="flex justify-center items-center"
          data-aos="fade-right"
        >
          <img
            src="https://www.y-axis.com/assets/cms/2023-09/Counseling.webp"
            alt="Job Consultancy"
            className="max-w-full h-auto"
          />
        </div>

        <div
          className="flex flex-col justify-center space-y-6"
          data-aos="fade-left"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight font-space-grotesk">
            Career Counseling & Job Consultancy
          </h1>
          <p className="text-sm font-semibold text-center text-gray-700 font-space-grotesk">
            We provide professional career counseling services to guide you in choosing the right job path. Our experts
            help you craft resumes, improve interview skills, and find opportunities that match your skills and aspirations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="tel:+1234567890">
              <button className="bg-transparent text-black hover:text-white hover:bg-red-600 border border-red-500 font-semibold py-3 px-8 transition duration-300 w-full text-center">
                Free Consultation
              </button>
            </a>

            <Link to={`/job`}>
              <button className="bg-white text-black font-semibold py-3 px-8 border border-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-300 w-full text-center">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobConsultancy;
