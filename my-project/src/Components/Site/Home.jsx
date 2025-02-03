import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-full bg-white flex items-center justify-center ">
      <div className="container mx-auto py-5 px-4 border">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="overflow-hidden "
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img
              src="https://edabroad.in/wp-content/uploads/2023/08/single-image.webp"
              alt="Study Abroad"
              className="w-full h-full bg-cover p-5"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center text-center md:text-left space-y-8 p-6 md:p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              What can we do for you today?
            </h1>
            <div className="grid grid-cols-2 gap-4 w-full lg:p-12">
  <Link to={`/study`} className="w-full">
    <button className="w-full h-20 py-3 px-6 text-lg font-medium bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 hover:border-yellow-500 border transition-all duration-300">
      Study Abroad
    </button>
  </Link>
  <Link to={`/job`} className="w-full">
    <button className="w-full h-20 py-3 px-6 text-lg font-medium bg-violet-500 text-white hover:bg-white hover:text-violet-500 hover:border-violet-500 border transition-all duration-300">
      Job Consulting
    </button>
  </Link>
  <Link to={`/visiting-visa`} className="w-full">
    <button className="w-full h-20 py-3 px-6 text-lg font-medium bg-cyan-500 text-white hover:bg-white hover:text-cyan-500 hover:border-cyan-500 border transition-all duration-300">
      Visiting Visa
    </button>
  </Link>
  <Link to={`/immigration`} className="w-full">
    <button className="w-full h-20 p-3 py-3 px-6 text-lg font-medium bg-emerald-500 text-white hover:bg-white hover:text-emerald-500 hover:border-emerald-500 border transition-all duration-300">
      Immigrate
    </button>
  </Link>
</div>
          </motion.div>
        </motion.div>
             
     
      </div>
    </div>
  );
};

export default Home;


