import React, { useState } from "react";
import "animate.css";

export const ProductPreviewCard = ({ heading, img }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHovered = () => {
    setHovered(!hovered);
  };
  return (
    <div
      className="w-full max-h-full bg-custom-white overflow-hidden relative grid grid-cols-1 grid-rows-[50px_minmax(0,_1fr)] sm:grid-rows-[1fr_minmax(0,_1fr)] rounded-md p-3"
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
    >
      <div
        className={`w-[200%] top-0 left-0 grid grid-cols-2 ${
          hovered ? "animate-runningText" : ""
        }`}
      >
        <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center block w-[100%]">
          {heading}
        </h3>
        <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center block">
          {heading}
        </h3>
      </div>
      <div
        className={`w-[200%] top-0 left-0 grid grid-rows-1 grid-cols-2 place-items-center ${
          hovered ? "animate-runningImage" : ""
        }`}
      >
        <img src={img} className="h-full" />
        <img src={img} className="h-full" />
      </div>
    </div>
  );
};
