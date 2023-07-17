import React, { useState } from "react";

export const PackagesPreviewCard = ({
  setShowDetail,
  showDetail,
  index,
  heading,
  pricing,
  thumbnail,
  kit,
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
        className="w-[400px] sm:max-w-[85vw] h-full bg-custom-black absolute overflow-hidden rounded-lg "
        onClick={toggleDetail}
      >
        <div className="relative h-full  transition-all cursor-pointer hover:scale-[1.05]">
          <img src={thumbnail} className="object-cover h-full w-full" />
          <h1 className="absolute top-0 h-full w-full flex text-center items-center font-extrabold text-7xl text-custom-black drop-shadow-[2px_2px_2px_var(--tw-shadow-color)] shadow-custom-white hover:scale-[.95] transition-all">
            {heading}
          </h1>
        </div>
      </div>
      <div></div>
      <div className="ml-3 text-custom-white bg-custom-black p-2 rounded-lg grid grid-rows-[.5fr_.8fr_minmax(0,_5fr)]">
        <h1 className="text-center font-bold text-4xl">{heading}</h1>
        <div className="grid grid-cols-2 bg-custom-blue-dark mx-3 my-4 rounded-md">
          <span
            className={`
            ${showPricing ? "" : "bg-custom-blue"} 
            w-full h-full flex justify-center items-center rounded-l-md cursor-pointer`}
            onClick={() => setShowPricing(false)}
          >
            Description
          </span>
          <span
            className={`
            ${showPricing ? "bg-custom-blue" : ""} 
            w-full h-full flex justify-center items-center rounded-r-md cursor-pointer`}
            onClick={() => setShowPricing(true)}
          >
            Pricing
          </span>
        </div>
        <div
          className={`${
            showPricing ? "hidden" : ""
          } w-full h-full p-4 text-justify flex flex-col justify-center items-center -mt-5`}
        >
          <p>This kit includes :</p>
          <ul className="list-disc ml-16">
            {kit.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div
          className={`${
            showPricing ? "" : "hidden"
          } w-full h-full p-4 text-justify flex flex-col justify-center items-center -mt-5`}
        >
          <p>Only start from</p>
          {pricing}
        </div>
      </div>
    </div>
  );
};
