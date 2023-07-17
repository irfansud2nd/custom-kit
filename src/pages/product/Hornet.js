import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import hornet from "./../../img/hornet-detail.jpg";

export const Hornet = () => {
  return (
    <ProductDetailPage
      heading="Hornet"
      desc="This part installd on your rear seat, the purpose is to support your body from the back. This part is invented on caferacer bike, which is a bike that used to race from cafe to cafe"
      img={hornet}
      types={["Kawasaki W175", "Yamaha XSR155"]}
      material="This part is built with fiber, because it's designed only for looks not strength. We dont recommend you to put any weight on top of it top maintain the shape"
    />
  );
};
