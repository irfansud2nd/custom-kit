import React from "react";
import fender from "./../../img/fender-detail.jpg";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";

export const Fender = () => {
  const types = ["types1", "types1"];

  return (
    <ProductDetailPage
      heading="Fender"
      desc="Fender is originally designed to prevent debris from spewing away from the spinning tire during travel. However, over time fender is part that can change how your bike looks. Because for some people look is over functionality."
      img={fender}
      types={[
        "Kawasaki W175 Front",
        "Kawasaki W175 Front for Tracker",
        "Kawasaki W175 Rear",
        "Kawasaki W175 Rear for Tracker",
        "Benneli PE250 Front",
        "Benneli PE250 Rear for Bobber",
        "Yamaha XSR155 Front",
        "Honda ADV150 Front",
        "Honda CB150X Front",
      ]}
      material="there is some product that built with metal, and the rest is built with fiber. We chose the material based on how it looks"
    />
  );
};
