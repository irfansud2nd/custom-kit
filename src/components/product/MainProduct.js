import React, { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { ImageBorder } from "./ImageBorder";
import fenderImage from "./../../img/fender.png";
import fairingImage from "./../../img/fairing.png";
import handlebarImage from "./../../img/handlebar.png";
import engineCoverImage from "./../../img/engine-cover.png";
import hornetImage from "./../../img/hornet.png";
import exhaustImage from "./../../img/exhaust.png";
import seatImage from "./../../img/seat.png";
import swingArmImage from "./../../img/swing-arm.png";

export const MainProduct = () => {
  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState(null);
  const imageCollection = [
    fenderImage,
    fairingImage,
    handlebarImage,
    engineCoverImage,
    hornetImage,
    exhaustImage,
    seatImage,
    swingArmImage,
  ];

  const showPicture = (e) => {
    setHovered(true);
    setImage(imageCollection[e.target.id - 1]);
  };
  const hidePicture = (e) => {
    setHovered(false);
  };

  useEffect(() => {
    document.title = `Product - CUSTOMKIT`;
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center relative 
      transition duration-500
      text-custom-white
      ${hovered ? "bg-custom-blue-light" : "bg-custom-blue"}`}
    >
      <ul className="absolute top-0 left-0 right-0 bottom-0 z-[1] flex flex-col justify-center items-center">
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={1}
          href={"/product/fender"}
        >
          Fender
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={2}
          href={"/product/fairing"}
        >
          Fairing
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={3}
          href={"/product/handlebar"}
        >
          Handlebar
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={4}
          href={"/product/enginecover"}
        >
          Engine Cover
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={5}
          href={"/product/hornet"}
        >
          Hornet
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={6}
          href={"/product/exhaust"}
        >
          Exhaust
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={7}
          href={"/product/seat"}
        >
          Seat
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={8}
          href={"/product/swingarm"}
        >
          Swing Arm
        </ProductItem>
        <ImageBorder show={hovered} img={image} />
      </ul>
    </div>
  );
};
