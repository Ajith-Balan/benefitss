import React from 'react';

const promotions = [
  {
    title: 'Resume Building Service',
    description: 'Get a professional resume designed to attract top recruiters.',
  },
  {
    title: 'Interview Preparation',
    description: 'Mock interviews and guidance from industry experts.',
  },
  {
    title: 'Special Discounts',
    description: 'Avail 20% off on all our premium packages this month.',
  },
  {
    title: 'Global Job Opportunities',
    description: 'Connect with top employers across the globe.',
  },
  {
    title: 'Career Counseling',
    description: 'Expert advice to help you choose the right career path.',
  },
  {
    title: 'Job Alerts',
    description: 'Stay updated with the latest job openings tailored to your profile.',
  },
];

const about = {
  heading: 'About Our Consultancy',
  description:
    'We are a leading job consultancy with a decade of experience connecting job seekers with top employers. Our services include resume building, career counseling, job placement assistance, interview preparation, and more. Our expert team ensures personalized support to help you achieve your career goals.',
};

const testimonials = [
  {
    name: 'John Doe',
    feedback:
      'Thanks to this consultancy, I landed my dream job within two months. The team was incredibly supportive and professional.',
  },
  {
    name: 'Jane Smith',
    feedback:
      'Their resume building service is top-notch. I started getting interview calls immediately after applying.',
  },
];

const J2 = () => {
  return (
    <div className="p-6  min-h-screen mt-5 border">
     
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-center mb-6"></h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white p-4 border hover:border-pink-400 transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-500 mb-2">{promo.title}</h2>
              <p className="text-gray-600 font-bold text-md">{promo.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-white p-6 border hover:border-red-500 mb-12">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">{about.heading}</h1>
        <p className="text-gray-700 mb-4 font-semibold text-sm">{about.description}</p>
        <ul className="list-disc list-inside text-gray-500">
          <li>Resume Building</li>
          <li>Career Counseling</li>
          <li>Interview Preparation</li>
          <li>Job Placement Assistance</li>
          <li>Job Alerts</li>
        </ul>
      </section>

          <section className="mb-12">
        <h1 className="text-2xl font-bold text-center mb-6">Testimonials</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 border hover:border-yellow-400 transition-shadow duration-300"
            >
              <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h2 className="text-lg font-semibold text-yellow-400">- {testimonial.name}</h2>
            </div>
          ))}
        </div>
      </section>

     
      <section className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Ready to Kickstart Your Career?</h1>
        <p className="text-gray-700 mb-6">
          Contact us today and let’s work together to achieve your career goals!
        </p>
        <button className="hover:text-white py-2 px-4 border text-red-600 hover:bg-red-700 transition-colors">
          Contact us
        </button>
      </section>
    </div>
  );
};

export default J2;
