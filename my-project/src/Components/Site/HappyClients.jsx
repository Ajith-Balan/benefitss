import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Menon",
    feedback:
      "Amazing service! The team guided me through the entire process seamlessly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Ajay",
    feedback:
      "The best consultancy service I've ever experienced. They helped me achieve my dream of studying abroad.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Ruben",
    feedback:
      "Their visa processing was quick and hassle-free. I couldn't have asked for a better experience!",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Abhiram",
    feedback:
      "The team was supportive and professional. I’m now working abroad thanks to their guidance!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const HappyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="p-12">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-start text-teal-500 mb-12 font-space-grotesk ">
          Happy Clients
        </h2>
        {/* <hr className="mt-6 mb-7 w-screen"/> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7">
          <div className="mx-auto">
            <img
              src="https://aramvisas.com/wp-content/uploads/2021/04/skilled-canada.jpg"
              alt="Happy Clients"
              className="object-cover"
            />
          </div>
          <div className="relative">
                      <motion.div
              className="flex items-center justify-center mt-[10vh]"
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-[400px] mx-auto p-6 bg-white border transform transition-transform duration-300 hover:scale-105">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-500"
                />
                <h3 className="text-lg font-semibold text-teal-600 text-center mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-700 text-center text-base leading-relaxed font-space-grotesk">
                  {testimonials[currentIndex].feedback}
                </p>
              </div>
            </motion.div>

                        <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-teal-500 transition duration-300"
              onClick={prevSlide}
            >
              ❮
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-teal-500 transition duration-300"
              onClick={nextSlide}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
