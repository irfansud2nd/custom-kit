import React, { useEffect, useRef } from "react";
import { Slide } from "./Slide";
import slideOneImage from "./../../img/slide-1.png";
import slideTwoImage from "./../../img/slide-2.png";
import slideThreeImage from "./../../img/slide-3.png";
import slideFourImage from "./../../img/slide-4.png";

export const Slides = () => {
  return (
    <div>
      <Slide
        className="bg-custom-blue-dark text-custom-white z-[3]"
        heading="Easy Installation"
        text="
            Everything is plug and play, you don't need to customize your chasis or anityng else. Just install the custom kit with bolt to the hole that already exist on your bike. 
          "
        img={slideOneImage}
      />
      <Slide
        className="bg-custom-blue-light z-[2]"
        heading="It wont ruin your bike"
        text="
            Because Everything is plug and play, you can easily make your bike back to its original form without any defect. 
          "
        img={slideTwoImage}
        left
      />
      <Slide
        className="bg-custom-blue-dark text-custom-white z-[1]"
        heading="Lot of varieties"
        text="
            You can buy the whole package, like Scrambler kit, Caferacer kit and other kits. or you can combine it the way you like it.
          "
        img={slideThreeImage}
      />
      <Slide
        className="bg-custom-blue-light"
        heading="High Quality"
        text="
           We always maintin our high quality and the consistency for our beloved customers.
          "
        img={slideFourImage}
        left
      />
    </div>
  );
};
