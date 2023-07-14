import React from "react";
import { Slide } from "./Slide";
import forRight from "./../../img/forRight.svg";
import forLeft from "./../../img/forLeft.svg";

export const Slides = () => {
  return (
    <div>
      <Slide
        className="bg-red-500 z-[3]"
        heading="Lorem ipsum dolor sit amet."
        text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolore reiciendis, incidunt eum perferendis asperiores. Nemo
            accusamus temporibus alias necessitatibus reprehenderit ipsa aliquid
            consequuntur molestiae nostrum odio iste, ipsum magni quas sed. Quo
            maiores repellendus labore soluta quia omnis earum fugiat fugit,
            quasi incidunt rerum, corrupti sed reprehenderit obcaecati saepe!
          "
        img={forRight}
      />
      <Slide
        className="bg-yellow-500 z-[2]"
        heading="Lorem ipsum dolor sit amet."
        text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolore reiciendis, incidunt eum perferendis asperiores. Nemo
            accusamus temporibus alias necessitatibus reprehenderit ipsa aliquid
            consequuntur molestiae nostrum odio iste, ipsum magni quas sed. Quo
            maiores repellendus labore soluta quia omnis earum fugiat fugit,
            quasi incidunt rerum, corrupti sed reprehenderit obcaecati saepe!
          "
        img={forLeft}
        left
      />
      <Slide
        className="bg-blue-500 z-[1]"
        heading="Lorem ipsum dolor sit amet."
        text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolore reiciendis, incidunt eum perferendis asperiores. Nemo
            accusamus temporibus alias necessitatibus reprehenderit ipsa aliquid
            consequuntur molestiae nostrum odio iste, ipsum magni quas sed. Quo
            maiores repellendus labore soluta quia omnis earum fugiat fugit,
            quasi incidunt rerum, corrupti sed reprehenderit obcaecati saepe!
          "
        img={forRight}
      />
      <Slide
        className="bg-green-500"
        heading="Lorem ipsum dolor sit amet."
        text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolore reiciendis, incidunt eum perferendis asperiores. Nemo
            accusamus temporibus alias necessitatibus reprehenderit ipsa aliquid
            consequuntur molestiae nostrum odio iste, ipsum magni quas sed. Quo
            maiores repellendus labore soluta quia omnis earum fugiat fugit,
            quasi incidunt rerum, corrupti sed reprehenderit obcaecati saepe!
          "
        img={forLeft}
        left
      />
    </div>
  );
};
