import React from "react";

const V2 = () => {
  const services = [
    {
      title: "Personalized Visa Consultancy",
      description:
        "Tailored guidance for your visa application process to ensure success.",
    },
    {
      title: "Document Verification",
      description:
        "Thorough verification of your documents to meet embassy standards.",
    },
    {
      title: "Application Assistance",
      description:
        "Expert assistance in filling out visa forms with accuracy.",
    },
    {
      title: "Travel Insurance",
      description:
        "Get affordable travel insurance plans for your trips.",
    },
  ];

  const promotions = [
    {
      title: "Discounted Family Packages",
      description: "Special discounts for family visa applications.",
    },
    {
      title: "Student Visa Offers",
      description: "Reduced fees for student visa processing.",
    },
    {
      title: "Referral Rewards",
      description: "Invite friends and earn rewards on their successful visa applications.",
    },
  ];

  return (
    <div className="container mx-auto mt-10  p-8 border">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Global Visa Consulting Services
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We are an international company offering top-notch visa consultancy
          services to help you explore the world effortlessly.
        </p>
      </header>

    
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-500">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-500 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Promotional Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className=" p-6 border border-red-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                {promo.title}
              </h3>
              <p className="text-gray-700">{promo.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          © 2024 Visa Consulting International. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default V2;
