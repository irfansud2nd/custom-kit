import React from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import img from "./../../img/burger.png";

export const ProductPreview = () => {
  return (
    <div className="max-h-[300vh] md:max-h-[200vh] xl:max-h-screen w-full bg-red-400 grid grid-rows-[.8fr_minmax(0,_6fr)]">
      <h2 className="flex justify-center items-center text-4xl font-extrabold">
        Product Preview
      </h2>
      <div className="grid grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-10 px-7 pb-5 max-h-full">
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
        <ProductPreviewCard heading="Product Name" img={img} />
      </div>
    </div>
  );
};
