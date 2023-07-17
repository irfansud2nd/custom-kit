import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import engineCover from "./../../img/engine-cover-detail.jpg";

export const EngineCover = () => {
  return (
    <ProductDetailPage
      heading="Engine Cover"
      desc="This part is designed to protect your engine from things that might be throwed by your front wheel or anything else that can damage your engine from the outside. Beside that, this part can make your engine looks more solid"
      img={engineCover}
      types={[
        "Kawasaki W175 Front",
        "Kawasaki W175 Side",
        "Yamaha XSR155 Front Metal",
        "Yamaha XSR155 Front Fiber",
        "Benneli PE250 Front",
      ]}
      material="this part is mostly built with metal, but for some type it's built with fiber. The fiber for this part is more stronger for better protection"
    />
  );
};
