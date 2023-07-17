import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import seat from "./../../img/seat-detail.jpg";

export const Seat = () => {
  return (
    <ProductDetailPage
      heading="Seat"
      desc="This is is the part where you will sit on it, so model of seat will affect your comfort and riding position"
      img={seat}
      types={[
        "Kawasaki W175 Strip",
        "Kawasaki W175 Diamond",
        "Yamaha XSR155 Cafe",
        "Benelli PE250 Bobber",
        "Benelli PE250 Benni",
      ]}
      material="Our seat is made with high quality synthetic leather, and stitched with the best technique. We are very concern about comfortness and appearance of our seat"
    />
  );
};
