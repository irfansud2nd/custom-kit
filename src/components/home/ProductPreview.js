import React from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import fenderImage from "./../../img/fender.png";
import fairingImage from "./../../img/fairing.png";
import handlebarImage from "./../../img/handlebar.png";
import engineCoverImage from "./../../img/engine-cover.png";
import hornetImage from "./../../img/hornet.png";
import exhaustImage from "./../../img/exhaust.png";
import seatImage from "./../../img/seat.png";
import swingArmImage from "./../../img/swing-arm.png";

export const ProductPreview = () => {
  return (
    <div className="max-h-[300vh] md:max-h-[200vh] xl:max-h-screen w-full grid grid-rows-[.8fr_minmax(0,_6fr)] bg-custom-blue">
      <h2 className="flex justify-center items-center text-4xl font-extrabold text-custom-white">
        Product Preview
      </h2>
      <div className="grid grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-10 px-7 pb-5 max-h-full mb-5">
        <ProductPreviewCard heading="Fender" img={fenderImage} />
        <ProductPreviewCard heading="Fairing" img={fairingImage} />
        <ProductPreviewCard heading="Handle Bar" img={handlebarImage} />
        <ProductPreviewCard heading="Engine Cover" img={engineCoverImage} />
        <ProductPreviewCard heading="Hornet" img={hornetImage} />
        <ProductPreviewCard heading="Exhaust" img={exhaustImage} />
        <ProductPreviewCard heading="Seat" img={seatImage} />
        <ProductPreviewCard heading="Swing Arm" img={swingArmImage} />
      </div>
    </div>
  );
};
