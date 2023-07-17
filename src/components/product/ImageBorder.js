import React from "react";
import "animate.css";

export const ImageBorder = ({ img, show }) => {
  return (
    <div className="hidden md:block">
      <div
        className={`w-screen h-screen overflow-y-hidden overflow-x-hidden
      ${show ? "absolute top-0 right-0 bottom-0 left-0 -z-[1]" : "hidden"}
      `}
      >
        {/* from top */}
        <div
          className={`absolute w-[110%] max-h-[30%] -left-[5%] -top-[5%] grid grid-cols-5 grid-rows-1 place-items-center 
        ${show ? "animate__animated animate__bounceInDown animate__faster" : ""}
        `}
        >
          <img
            src={img}
            className="h-full rotate-[70deg] place-self-start 
        "
          />
          <img src={img} className="h-full rotate-[25deg] place-self-start" />
          <img src={img} className="h-full rotate-[90deg] " />
          <img src={img} className="h-full rotate-[130deg] place-self-end" />
          <img src={img} className="h-full rotate-[25deg] place-self-end" />
        </div>
        {/* from Left */}
        <div
          className={`absolute top-0 bottom-0 w-[20%] -left-[10%] flex flex-col justify-center
        ${show ? "animate__animated animate__bounceInLeft animate__faster" : ""}
        `}
        >
          <img src={img} className="h-[40%]" />
        </div>
        {/* From Right */}
        <div
          className={`absolute top-0 bottom-0 w-[20%] -right-[10%] flex flex-col justify-center
        ${
          show ? "animate__animated animate__bounceInRight animate__faster" : ""
        }
        `}
        >
          <img src={img} className="h-[40%] rotate-[90deg]" />
        </div>
        {/* From Top */}
        <div
          className={`absolute w-[110%] max-h-[30%] -left-[5%] -bottom-[5%] grid grid-cols-5 grid-rows-1 place-items-center 
        ${show ? "animate__animated animate__bounceInUp animate__faster" : ""}
        `}
        >
          <img
            src={img}
            className="h-full rotate-[70deg] place-self-start 
        "
          />
          <img src={img} className="h-full rotate-[25deg] place-self-start" />
          <img src={img} className="h-full rotate-[90deg] " />
          <img src={img} className="h-full rotate-[130deg] place-self-end" />
          <img src={img} className="h-full rotate-[25deg] place-self-end" />
        </div>
      </div>
    </div>
  );
};
