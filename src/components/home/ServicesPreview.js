import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { ServicesPreviewCard } from "./ServicesPreviewCard";
import thumbnail from "./../../img/thumbnail.jpg";

export const ServicesPreview = () => {
  const draggableref = useRef();
  const { events } = useDraggable(draggableref);

  const detilStateInitialValue = [false, false, false, false, false];

  const [showDetailState, setShowDetailState] = useState(
    detilStateInitialValue
  );

  const setShowDetail = (index) => {
    let arr = [...detilStateInitialValue];
    let currentState = showDetailState[index];
    arr.splice(index, 1, !currentState);
    setShowDetailState(arr);
  };

  return (
    <div
      id="package"
      className="w-full min-h-screen flex justify-start items-center"
    >
      <div
        className="flex py-10 w-full space-x-3 overflow-x-scroll no-scrollbar cursor-grab"
        {...events}
        ref={draggableref}
      >
        <div className="flex-none w-[10vw] h-full"></div>
        <ServicesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={0}
          thumbnail={thumbnail}
          heading={"Lorem Ipsum"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum? Eveniet reprehenderit alias nam quod magni quidem nobis cumque nemo, quas voluptatem repudiandae?"
          }
          pricing={"500.000"}
        />
        <ServicesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={1}
          thumbnail={thumbnail}
          heading={"Lorem Ipsum"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum? Eveniet reprehenderit alias nam quod magni quidem nobis cumque nemo, quas voluptatem repudiandae?"
          }
          pricing={"500.000"}
        />
        <ServicesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={2}
          thumbnail={thumbnail}
          heading={"Lorem Ipsum"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum? Eveniet reprehenderit alias nam quod magni quidem nobis cumque nemo, quas voluptatem repudiandae?"
          }
          pricing={"500.000"}
        />
        <ServicesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={3}
          thumbnail={thumbnail}
          heading={"Lorem Ipsum"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum? Eveniet reprehenderit alias nam quod magni quidem nobis cumque nemo, quas voluptatem repudiandae?"
          }
          pricing={"500.000"}
        />
        <ServicesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={4}
          thumbnail={thumbnail}
          heading={"Lorem Ipsum"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi quos odio possimus aliquid tempore. Deleniti, laborum? Eveniet reprehenderit alias nam quod magni quidem nobis cumque nemo, quas voluptatem repudiandae?"
          }
          pricing={"500.000"}
        />
      </div>
    </div>
  );
};
