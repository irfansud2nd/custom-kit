import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import fairing from "./../../img/fairing-detail.jpg";

export const Fairing = () => {
  return (
    <ProductDetailPage
      heading="Fairing"
      desc="Fairing is originally designed to increase the performance of a bike, this part can imporove the aerodynamic by reducing air drag. However, we design our fairing with its appearance in mind."
      img={fairing}
      types={["Kawasaki W175 Half", "Kawasaki W175 Full"]}
      material="This part is built with fiber, because its lightweight"
    />
  );
};
