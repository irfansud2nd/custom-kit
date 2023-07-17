import React, { useEffect } from "react";
import "animate.css";
import mainHome from "./../../img/main-home.png";

export const MainHome = () => {
  useEffect(() => {
    document.title = `CUSTOMKIT`;
  }, []);
  return (
    <div
      className={`w-full h-screen flex justify-center items-center relative whitespace-nowrap text-[4rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] transition-all font-extrabold `}
    >
      <h1 className="absolute bottom-[59%] sm:bottom-[55%] md:bottom-[53%] lg:bottom-[50%] z-[0] animate__animated animate__bounceIn drop-shadow-[2px_2px_2px_var(--tw-shadow-color)] shadow-custom-blue">
        Bolt-On
      </h1>
      <img
        src={mainHome}
        className="animate__animated animate__bounceIn animation-delay-300 drop-shadow-[5px_5px_5px_var(--tw-shadow-color)] shadow-custom-black"
      />
      <h1 className=" absolute top-[62%] sm:top-[55%] lg:top-[50%] animate__animated animate__bounceIn animation-delay-600 drop-shadow-[2px_2px_2px_var(--tw-shadow-color)] shadow-custom-blue">
        Masterpiece
      </h1>
    </div>
  );
};
