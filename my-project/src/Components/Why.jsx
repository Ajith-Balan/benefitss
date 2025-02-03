import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="container mx-auto mt-10 bg-white p-8 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Animated Text Section */}
        <motion.div
          className="flex flex-col space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight font-space-grotesk">
            About Benefits International
          </h1>
          <p className="text-base text-gray-600 font-space-grotesk">
            Benefits International is a trusted consultancy firm with over a decade of experience providing exceptional
            services to individuals seeking visiting visas, career guidance, and personalized support for international
            travel and settlement. Our mission is to simplify complex processes and ensure our clients achieve their goals
            with ease.
          </p>
          <p className="text-base text-gray-600 font-space-grotesk">
            We specialize in a wide range of services, including visa assistance, career counseling, and travel planning.
            With a dedicated team of experts, we are committed to offering the highest level of professionalism and care to
            meet your unique needs.
          </p>
          <a
            href="tel:+11234567890"
            className="text-red-500 hover:text-white font-semibold py-3 px-8 border hover:bg-red-600 transition duration-300 w-full sm:w-60"
          >
            <button className="w-full">Contact Us</button>
          </a>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariants}
        >
          <img
            src="https://kommandtravel.com/wp-content/uploads/2023/02/Study_Visa1.jpg"
            alt="About Benefits International"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
