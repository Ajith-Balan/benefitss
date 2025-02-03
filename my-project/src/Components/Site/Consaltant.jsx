import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Consultant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   
    });
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 text-center border p-6">
       
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-600 mb-6 font-space-grotesk"
          data-aos="fade-down"
        >
          Your Trusted Visa Consultant
        </h1>

 
        <p
          className="text-lg text-gray-700 max-w-xl mx-auto mb-10 font-semibold font-space-grotesk"
          data-aos="fade-up"
        >
          We help you achieve your dream of studying or working abroad with expert guidance, tailored services, and proven success stories.
        </p>

      
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Study Abroad Services',
              description: 'Expert counseling and visa processing for students.',
              icon: '🎓',
            },
            {
              title: 'Work Abroad Guidance',
              description: 'Career opportunities and work visa assistance.',
              icon: '💼',
            },
            {
              title: 'Immigration Support',
              description: 'Hassle-free immigration and relocation services.',
              icon: '✈️',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 hover:scale-105 transition-all duration-300"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-teal-500 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-xs">{service.description}</p>
            </div>
          ))}
        </div>

      
        <div className="mt-10" data-aos="zoom-in">
          <Link to={`/visiting-visa`}>
            <a
              href="#contact"
              className="inline-block bg-teal-500 text-white font-semibold py-3 px-6 hover:bg-red-600 transition-colors duration-300"
            >
              Get Consultation Fast
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consultant;
