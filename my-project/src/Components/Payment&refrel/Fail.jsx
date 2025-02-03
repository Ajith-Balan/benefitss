import React from 'react';
import { motion } from 'framer-motion';

const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-6 text-center"
      >
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-red-500 text-4xl font-bold"
        >
          Oops! Failed
        </motion.div>
        <p className="text-gray-600 mt-2">Try Premium for more benefits</p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
        >
          Try Premium
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Fail;
