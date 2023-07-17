import React, { useEffect } from "react";
import { ProductDetail } from "./ProductDetail";
import { Navbar } from "../Navbar";
import { DropdownDetail } from "./DropdownDetail";
import { Box, List } from "react-bootstrap-icons";

export const ProductDetailPage = ({ heading, desc, img, types, material }) => {
  useEffect(() => {
    document.title = `${heading} - CUSTOMKIT`;
  }, []);
  return (
    <div className="w-full bg-custom-white">
      <Navbar />
      <ProductDetail heading={heading} desc={desc} img={img} />
      <DropdownDetail
        heading="Line up"
        desc={
          <ul className="list-disc ml-5">
            {types.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
        icon={<List />}
      />
      <DropdownDetail heading="Material" desc={material} icon={<Box />} />
    </div>
  );
};
