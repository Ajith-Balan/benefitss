import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { IoSearch, IoTrash } from "react-icons/io5";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

      const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/getnews");
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getData();
  }, []);

  
  const handleDelete = async (id) => {
    try {
    
      await axios.delete(`http://localhost:3003/api/deletenews/${id}`);

      setData(data.filter((news) => news._id !== id)); 
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div className="container mx-auto p-12 mt-7">
      <h2 className="text-2xl font-bold mb-6 text-start text-teal-500 xl:text-4xl font-space-grotesk">
        Latest News
      </h2>
      <hr className="mt-10 mb-5" />
      <h1 className="text-4xl mb-9 xl:mb-[13vh] font-bold">
        <span className="text-teal-500 font-space-grotesk">Latest</span> updates of benefits <br />
        Explore <span className="text-teal-500">Everywhere</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-7">
        {data.length > 0 ? (
          data.map((news, index) => (
            <div
              key={news._id} 
              className="relative group bg-white border hover:border-teal-500 overflow-hidden transition-shadow duration-300"
              data-aos={
                index % 2 === 0 ? "fade-right" : index % 3 === 0 ? "fade-left" : "fade-up"
              }
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-60 md:h-80 bg-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4 flex justify-between items-center">
                <p className="text-gray-600 text-sm">{news.title}</p>
                <button
                  onClick={() => handleDelete(news._id)} 
                  className="text-red-500 hover:text-red-700 z-50"
                >
                  <IoTrash className="w-6 h-6" />
                </button>
              </div>
              <motion.div
                className="absolute inset-0 bg-teal-500 bg-opacity-50 flex items-center justify-center text-white opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.p
                  className="text-xl px-4"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <IoSearch className="w-12 h-12 text-white" />
                </motion.p>
              </motion.div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No news available</p>
        )}
      </div>
    </div>
  );
};

export default News;
