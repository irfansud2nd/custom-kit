import React from "react";

export const ProductDetail = ({ img, heading, desc }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-inherit border-b-2 border-solid border-b-gray-300">
      <div className="hidden md:grid grid-cols-2 grid-rows-1 place-items-center w-full h-[80%] p-10">
        <div className="w-[80%]">
          <h1 className="text-8xl font-extrabold mb-4">{heading}</h1>
          <p className="text-justify">{desc}</p>
        </div>
        <img src={img} className="h-[80vh]" />
      </div>
      <div className="w-full md:hidden grid grid-cols-1 grid-rows-[1fr_minmax(0,_2fr)_1fr] place-items-center px-10">
        <h1 className="text-6xl font-extrabold">{heading}</h1>
        <img src={img} className="h-[50vh]" />
        <p className="text-justify">{desc}</p>
      </div>
    </div>
  );
};
