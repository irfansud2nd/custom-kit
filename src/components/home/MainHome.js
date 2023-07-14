import React from "react";
import burger from "./../../img/burger.png";
import "animate.css";

export const MainHome = () => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center relative mt-8`}
    >
      <h1 className="whitespace-nowrap text-[6rem] sm:text-[9rem] md:text-[12rem] transition-all font-extrabold absolute bottom-[62%] sm:bottom-[59%] md:bottom-[55%] -z-[1] animate__animated animate__bounceIn">
        it's your
      </h1>
      <img
        src={burger}
        className="h-2/5 animate__animated animate__bounceIn animation-delay-300"
      />
      <h1 className="whitespace-nowrap text-[6rem] sm:text-[9rem] md:text-[12rem] transition-all font-extrabold absolute top-[59%] sm:top-[53%] md:top-[50%] animate__animated animate__bounceIn animation-delay-600">
        tagline
      </h1>
    </div>
  );
};
