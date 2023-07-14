import React from "react";
import { Navbar } from "../../components/Navbar";
import { ProductDetail } from "../../components/product/ProductDetail";
import img from "./../../img/product-detail.png";
import { DropdownDetail } from "./../../components/product/DropdownDetail";
import * as Icon from "react-bootstrap-icons";

export const ProductOne = () => {
  return (
    <div className="w-full bg-green-200">
      <Navbar />
      <ProductDetail
        heading="lorem Ipsum"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum? Eveniet reprehenderit alias nam quod magni quidem nobis cumque nemo, quas voluptatem repudiandae?"
        img={img}
      />
      <DropdownDetail
        heading="lorem"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum?"
        icon={<Icon.Bag />}
      />
      <DropdownDetail
        heading="Ipsum"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum?"
        icon={<Icon.Bag />}
      />
      <DropdownDetail
        heading="Ipsum"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum?"
        icon={<Icon.Bag />}
      />
    </div>
  );
};
