import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    visatype: '',
    country: '',
    countryCode: '+91',
    phone: '',
    email: '',
    terms: false,
  });
  const { id } = useParams();

  const getData = async () => {
    console.log(id);
    const res = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/getdatas/${id}`);
    console.log(res.data);
    setData({ ...res.data });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert('You must accept the terms and conditions.');
      return;
    }

    const templateParams = {
      name: formData.name,
      visatype: formData.visatype,
      country: data.Country,
      countryCode: formData.countryCode,
      phone: formData.phone,
      email: formData.email,
    };

   
    emailjs
      .send(
        'service_r74e53r', 
        'template_y8v5nz9', 
        templateParams,
        'DXIWuxbV9blr57MhN' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Form submitted successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to submit the form. Please try again.');
        }
      );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container max-w-full bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-12 border">
        <div className="relative">
          <img
            src="https://www.y-axis.com/assets/cms/2024-12/Visa-page-banner.webp"
            alt="Visa Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bg-black bg-opacity-70 flex items-center justify-center"></div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12 border">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Apply for a Visa
          </h2>
          <form className="space-y-6 p-7" onSubmit={handleSubmit}>
            <img src={data.photo} alt="" className='w-17 h-16' />
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                I am
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
              />
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                looking for
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Visa Type
              </label>
              <select
                name="visatype"
                value={formData.visatype}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
              >
                <option value="" disabled>
                  Choose visa type
                </option>
                <option value="tourist">Tourist Visa</option>
                <option value="business">Business Visa</option>
                <option value="study">Study Visa</option>
                <option value="work">Work Visa</option>
                <option value="immigration">Immigration Visa</option>
              </select>
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Visa For
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Select country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
              >
               
                <option value="usa">{data.Country}</option>
             
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                Contact me at
              </label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-full sm:w-24 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+86">+86 (China)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full sm:w-48 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">
                My email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:w-60 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                Accept terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 px-8 border border-red-500 hover:bg-red-600 hover:text-white transition duration-300 w-full mt-4"
            >
              Submit
            </button>
          </form>
         
        </div>
  


      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

  <div className=" p-6 w-full mx-auto p-7 ">
    {/* <h1 className="text-4xl font-bold text-red-700 mb-4">{data.Country}</h1> */}
    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">{data.Heading}</h2>
    <h4 className="text-gray-600 font-semibold mb-4">{data.About}</h4>
    <p className="text-gray-500 text-base leading-relaxed mb-6">{data.Paragraph}</p>
    <a href="#" className="inline-block">
  {/* <button className="px-6 py-2 text-red-500 hover:text-white  hover:bg-red-600 border border-red-500 font-medium  transition-all duration-300 ease-in-out">
    Read More
  </button> */}
</a>

  </div>
  

</div>
    </div>
  );
};

export default CountryDetails;
