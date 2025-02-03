import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Studyabroad = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentType: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Email sending error:', error);
        }
      );
  };

  return (
    <div className="container mx-auto mt-10 bg-white p-8 bg-red-600 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center" data-aos="fade-right">
          <img
            src="https://www.studyabroadudaipur.com/wp-content/uploads/2016/11/banner-guidence.jpg"
            alt="Study Abroad"
            className="max-w-full h-auto xl:h-96 bg-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6" data-aos="fade-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Explore Study Abroad Opportunities
          </h1>
          <p className="text-sm font-semibold text-gray-700">
            Discover global education programs that open doors to top universities and unique cultural experiences.
            Whether you're planning to study in the USA, UK, Canada, or Australia, our expert advisors are here to help
            with admission processes, visa applications, and beyond.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 px-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="studentType" className="text-sm font-semibold text-gray-700">
                Student Type
              </label>
              <select
                name="studentType"
                id="studentType"
                value={formData.studentType}
                onChange={handleChange}
                className="w-full py-3 px-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option value="">Select your type</option>
                <option value="School Students">School Students</option>
                <option value="Graduate">Graduate</option>
                <option value="Professional">Professional</option>
                <option value="Parent">Parent</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 px-8 border border-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-300 w-full"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Studyabroad;
