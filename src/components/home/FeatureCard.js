import React from "react";

export const FeatureCard = ({ img, title, desc, className }) => {
  return (
    <div
      className={`w-full h-full grid grid-rows-[3fr_1fr_1fr] place-items-center text-center ${className}`}
    >
      <img src={img} className="h-full" />
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
