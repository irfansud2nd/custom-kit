import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { PackagesPreviewCard } from "./PackagesPreviewCard";
import w175Cafe from "./../../img/w175-caferacer.jpg";
import w175Tracker from "./../../img/w175-tracker.jpg";
import xsr155Tracker from "./../../img/xsr155-tracker.jpg";
import xsr155Cafe from "./../../img/xsr155-cafe.jpg";
import pe250Bobber from "./../../img/pe250-bobber.jpg";
import pe250Benni from "./../../img/pe250-benni.jpg";

export const PackagesPreview = () => {
  const draggableref = useRef();
  const { events } = useDraggable(draggableref);

  const detilStateInitialValue = [false, false, false, false, false, false];

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
        <PackagesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={0}
          thumbnail={w175Cafe}
          heading="W175 Caferacer"
          kit={[
            "Hornet",
            "Cafe Seat",
            "Fender",
            "Swing Arm",
            "Engine Covers",
            "Tire",
            "Exhaust",
            "Clubman Handle Bar",
            "Carburator Cover",
            "Headlight",
          ]}
          pricing="13.000.000"
        />
        <PackagesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={2}
          thumbnail={w175Tracker}
          heading={"W175 Tracker"}
          kit={[
            "Fender Set",
            "Tracker Seat",
            "Tracker Handle Bar",
            "Swing Arm",
            "Engine Cover",
            "Carburator Cover",
            "Headlight",
            "Exhaust",
            "Tire",
          ]}
          pricing={"13.000.000"}
        />
        <PackagesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={3}
          thumbnail={xsr155Cafe}
          heading={"XSR155 Caferacer"}
          kit={[
            "Hornet",
            "Clubman Handle Bar",
            "Speedometer Cover",
            "Headlamp Visor",
            "Side Panel",
            "Rear Monoshock",
            "Engine Cover",
            "Side Scoop",
          ]}
          pricing={"500.000"}
        />
        <PackagesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={4}
          thumbnail={xsr155Tracker}
          heading={"XSR155 Tracker"}
          kit={[
            "Side Plate",
            "Tracker Handlebar",
            "Speedometer Cover",
            "Headlamp Visor",
            "Rear Monoshock",
            "Engine Cover",
            "Side Scoop",
          ]}
          pricing={"10.000.000"}
        />
        <PackagesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={5}
          thumbnail={pe250Bobber}
          heading={"PE250 Bobber"}
          kit={[
            "Rear Lamp Set",
            "Head Lamp",
            "Mirror",
            "Fender Set",
            "Wheel Set",
            "Side Cover",
            "Seat",
            "Exhaust",
            "Fuel tank",
            "Handle Bar",
          ]}
          pricing={"23.000.000"}
        />
        <PackagesPreviewCard
          setShowDetail={setShowDetail}
          showDetail={showDetailState}
          index={6}
          thumbnail={pe250Benni}
          heading={"PE250 Benni"}
          kit={[
            "Rear Lamp Set",
            "Head Lamp",
            "Mirror",
            "Fender",
            "Hornet",
            "Wheel Set",
            "Side Cover",
            "Seat",
            "Exhaust",
            "Fuel tank",
            "Handle Bar",
          ]}
          pricing={"23.000.000"}
        />
      </div>
    </div>
  );
};
