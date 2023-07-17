import React from "react";
import { ProductDetailPage } from "../../components/product/ProductDetailPage";
import swingArm from "./../../img/swing-arm-detail.jpg";

export const SwingArm = () => {
  return (
    <ProductDetailPage
      heading="Swing Arm"
      desc="Swing Arm is a part that link your chasis and rear wheel. Lenght of swing arm can affect handling and proportional of your bike."
      img={swingArm}
      types={["Kawasaki W175"]}
      material="We built this swing arm with strong, and anti-rust metal"
    />
  );
};
