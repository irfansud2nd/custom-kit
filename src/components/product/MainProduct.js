import React, { useState } from "react";
import { ProductItem } from "./ProductItem";
import { ImageBorder } from "./ImageBorder";
import ProductOne from "./../../img/product-1.png";
import ProductTwo from "./../../img/product-2.png";

export const MainProduct = () => {
  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState(null);
  const imageCollection = [ProductOne, ProductTwo];

  const showPicture = (e) => {
    setHovered(true);
    setImage(imageCollection[e.target.id - 1]);
  };
  const hidePicture = (e) => {
    setHovered(false);
  };
  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center relative 
      transition duration-500
      ${hovered ? "bg-green-400" : "bg-green-600"}`}
    >
      <ul className="absolute top-0 left-0 right-0 bottom-0 z-[1] flex flex-col justify-center items-center">
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={1}
        >
          Product 1
        </ProductItem>
        <ProductItem
          onMouseOver={showPicture}
          onMouseLeave={hidePicture}
          id={2}
        >
          Product 2
        </ProductItem>
        <ImageBorder show={hovered} img={image} />
      </ul>
    </div>
  );
};
