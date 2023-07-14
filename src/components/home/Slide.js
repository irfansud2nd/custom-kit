import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

export const Slide = ({ className = "", left = false, img, heading, text }) => {
  const [animated, setAnimated] = useState(false);

  const changeAnimated = (visible) => {
    if (visible.inViewport) {
      console.log("animated");
      setAnimated(true);
    }
  };
  return (
    <div
      id="about"
      className={`${className} w-full h-screen flex justify-center items-center sticky bottom-0`}
    >
      <AnimationOnScroll
        className="flex justify-center max-h-full"
        animateIn="animate__zoomIn"
        animateOnce
        duration={0.3}
        offset={100}
      >
        <div
          className="
        w-3/4 
        grid 
        max-h-full
        grid-rows-1
        md:grid-cols-2 
        md:gap-10
        md:items-center"
        >
          {left ? <img src={img} className="h-full hidden md:block" /> : null}
          <div
            className="
          grid 
          max-h-full 
          grid-rows-[1fr_minmax(0,_2fr)_2fr] 
          place-items-center 
          md:block"
          >
            <h1 className="font-extrabold text-4xl">{heading}</h1>
            <div className="h-full flex justify-center items-center md:hidden">
              <img src={img} className="h-full" />
            </div>
            <p className="text-justify">{text}</p>
          </div>
          {left ? null : <img src={img} className="h-full hidden md:block" />}
        </div>
      </AnimationOnScroll>
    </div>
  );
};
