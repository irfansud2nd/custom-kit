import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import exhaust from "./../../img/exhaust-detail.jpg";

export const Exhaust = () => {
  return (
    <ProductDetailPage
      heading="Exhaust"
      desc="This part is designed to direct the post-combustion gasses from the engine cylinder and away from the driver out into the atmosphere. Modify this part can affect your sound and performance, we design our exhaust to find the sweet spot between sound and performance without forgetting its appearance"
      img={exhaust}
      types={[
        "Kawasaki W175 Cone Series",
        "Kawasaki W175 Modern Classic Series",
        "Yamaha XSR155 Stream Series",
        "Yamaha XSR155 NS Series",
        "Benelli PE250 Twin",
        "Benelli PE250 Single",
        "Honda ADV150 Urban Series",
        "Honda CB150X Pro-Tech Series",
      ]}
      material="Our Exhaust is built by stainless steel so it wont rust, we also use high temperature paint for our colored exhaust"
    />
  );
};
