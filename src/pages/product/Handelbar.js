import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import handlebar from "./../../img/handlebar-detail.jpg";

export const Handelbar = () => {
  return (
    <ProductDetailPage
      heading="Handlebar"
      desc="Handlebar is one of the most important part in motorcycle. Difference model of handlebar will affect control, riding position, and appearance of your bike.So, choose wisely for model of this part"
      img={handlebar}
      types={["Regular", "Tracker Low", "Tracker High", "Clubman", "Clip On"]}
      material="We Built this part with metal that strong and also realiable"
    />
  );
};
