import React, { useEffect, useState } from "react";
import home9 from "./../../img/home-9.png";
import { FeatureCard } from "./FeatureCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

export const Features = () => {
  const [delay, setDelay] = useState([]);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     console.log(window.innerWidth);
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       console.log(window.innerWidth);
  //     });
  //   };
  // }, []);

  return (
    <div className="w-full xl:h-screen bg-white grid grid-rows-[.3fr_minmax(1fr,2fr)] place-items-center py-10 px-20">
      <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
        <h1 className="text-4xl font-extrabold mb-16 xl:mb-0">Features</h1>
      </AnimationOnScroll>
      <div
        className="grid grid-rows-4 grid-cols-1 xl:grid-cols-4 xl:grid-rows-1
      max-h-full gap-10"
      >
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOnce
          duration={0.3}
        >
          <FeatureCard
            img={home9}
            title={"lorem ipsum"}
            desc={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vitae."
            }
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOnce
          duration={0.3}
          delay={150}
        >
          <FeatureCard
            img={home9}
            title={"lorem ipsum"}
            desc={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vitae."
            }
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOnce
          duration={0.3}
          delay={300}
        >
          <FeatureCard
            img={home9}
            title={"lorem ipsum"}
            desc={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vitae."
            }
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOnce
          duration={0.3}
          delay={450}
        >
          <FeatureCard
            img={home9}
            title={"lorem ipsum"}
            desc={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vitae."
            }
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};
