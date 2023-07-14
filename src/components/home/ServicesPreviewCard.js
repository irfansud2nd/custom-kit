import React, { useEffect, useState } from "react";

export const ServicesPreviewCard = ({
  setShowDetail,
  showDetail,
  index,
  heading,
  desc,
  pricing,
  thumbnail,
}) => {
  const [showPricing, setShowPricing] = useState(false);

  const toggleDetail = () => {
    setShowDetail(index);
  };

  const togglePricing = () => {
    setShowPricing(!showPricing);
  };

  return (
    <div
      className={`
      ${
        showDetail[index]
          ? " w-[800px] grid grid-cols-2"
          : " w-[400px] sm:max-w-[85vw] grid grid-cols-[0,1fr]"
      }  
      min-h-[500px] h-[80vh] min-h flex-none transition-all relative`}
    >
      <div
        className="w-[400px] sm:max-w-[85vw] h-full bg-red-300 absolute overflow-hidden rounded-lg"
        onClick={toggleDetail}
      >
        <div className="relative h-full hover:scale-[1.05] transition-all cursor-pointer">
          <img src={thumbnail} className="object-cover w-full h-full" />
          <h1 className="absolute top-0 h-full w-full flex text-center items-center font-extrabold text-7xl">
            {heading}
          </h1>
        </div>
      </div>
      <div></div>
      <div className="ml-3 bg-gray-500 p-2 rounded-lg grid grid-rows-[.5fr_.8fr_minmax(0,_5fr)]">
        <h1 className="text-center font-bold text-4xl">{heading}</h1>
        <div className="grid grid-cols-2 bg-gray-300 mx-3 my-4 rounded-md">
          <span
            className={`
            ${showPricing ? "" : "bg-white"} 
            w-full h-full flex justify-center items-center rounded-l-md cursor-pointer`}
            onClick={() => setShowPricing(false)}
          >
            description
          </span>
          <span
            className={`
            ${showPricing ? "bg-white" : ""} 
            w-full h-full flex justify-center items-center rounded-r-md cursor-pointer`}
            onClick={() => setShowPricing(true)}
          >
            Pricing
          </span>
        </div>
        <div
          className={`${
            showPricing ? "hidden" : ""
          } w-full h-full p-4 text-justify flex flex-col justify-center items-center `}
        >
          {desc}
        </div>
        <div
          className={`${
            showPricing ? "" : "hidden"
          } w-full h-full p-4 text-justify flex flex-col justify-center items-center`}
        >
          <p>Only start from</p>
          {pricing}
        </div>
      </div>
    </div>
  );
};
