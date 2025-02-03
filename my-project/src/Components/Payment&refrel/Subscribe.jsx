import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <div className="font-[sans-serif] p-6 md:p-12 xl:p-[15vh]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-teal-500 text-3xl md:text-4xl font-bold mb-3">
            Subscribe for More Benefits
          </h2>
          <p className="text-sm text-gray-500">
            Change your plan according to your needs
          </p>
        </div>

        <div className="flex justify-center mt-5">
          <div className="shadow-lg rounded-lg overflow-hidden transition-all duration-500 relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">
              Most Popular
            </span>
            <div className="h-28 sm:h-32 mx-auto bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxEQEBMQEhIQEBYVFRgYERYVFhAOFRYWGBUXFhUYHiggGBomGxUVIjEhJS0rLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALUBFwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEcQAAEDAgIGBQYJCwQDAAAAAAEAAgMEEQUhBhIxQVFxE2GBkbEiMkKhwdEVUlRicoKS0uEHFBYjM0Nzg5OUwlNjo/AkNLL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgUBAwQG/8QAKhEBAAICAQQCAgICAgMAAAAAAAECAxESBBMhQTFRFGEVIgWhI1JCcYH/2gAMAwEAAhEDEQA/AO4oCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDTrqkt1Wt855yPALh6zPbHERX5luxY+W5n4hB41irqYaweXEWvnfnkqvv5623FturHhrePMJzCK9tRCyVuxw7jvV5gydym3FkpwtpuLcgICAg+ICxsfVkEBAQEBAQEBAQEBAQEBAQEBAQa9dUdGwu37BzK5+py9vHuGzFTnbSFxPEzCzX6S5te2Vu5U09Rm3ExZ148MW3GklgWJCpgbKN+R6nDarnp8s5KblyZacLaSC6GsQEBBX9MNZkPTNIuw2PWCd3XdV3X4txFvp19JfVuP25ji9bPM02A45m1hxVfSawsZifTq+iuHGmo4YiQ5wbdxGwudmbdSu+npxpCny25WmUutzWICAgjcaruia3PVLza/Ab1w9bmtSuq+3R0+OL28oiuxiKFuu17iRtudp7VU9y8TE0mduquCZ3yhYMPqhLEyQbHtBV/gydykW+1fevG0w2VtREBAQEBA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')] text-center p-4 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl text-white mb-1">Premium Subscription</h3>
              <p className="text-xs text-white">Lifetime</p>
            </div>
            <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto -mt-10 sm:-mt-12 shadow-xl rounded-full bg-blue-600 text-white border-4 flex flex-col items-center justify-center border-white">
              <p className="text-xs font-bold">INR: 1000</p>
              <h3 className="text-lg sm:text-2xl">1000</h3>
            </div>
            <div className="px-6 py-4 mt-4">
              <ul className="space-y-3">
                {[...Array(4)].map((_, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                    </svg>
                    100 Page Unlock
                  </li>
                ))}
              </ul>
              <Link to="/login">
                <button
                  type="button"
                  className="w-full mt-6 px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 rounded-full"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;