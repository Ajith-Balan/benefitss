import React from "react";

const MarqueeText = () => {
  return (
    <div className="overflow-hidden mt-24 sm:mt-40 bg-blue-500 flex h-10 mb-2 text-white ">
      {/* Fixed Container for Latest Update */}
      {/* <div className="bg-white text-black text-black-900 w-40 h-full flex items-center justify-center px-2">
        Latest Update
      </div> */}
      {/* Scrolling Marquee */}
      <div
        className="whitespace-nowrap animate-marquee flex items-center"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        <span className="mx-4">Welcome to Benefitz International Consultancy!</span>
        <span className="mx-4">We guide students to secure their dream degrees.</span>
        <span className="mx-4">Contact us for study abroad and immigration services.</span>
      </div>
    </div>
  );
};

export default MarqueeText;
