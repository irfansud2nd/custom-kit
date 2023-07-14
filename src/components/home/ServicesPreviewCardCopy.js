import React, { useEffect, useState } from "react";

export const ServicesPreviewCardCopy = () => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  useEffect(() => {}, [showDetail]);

  return (
    <div
      className={`
      ${
        showDetail
          ? " w-[800px] grid grid-cols-2"
          : " w-[400px] max-w-[80vw] grid grid-cols-[0,1fr]"
      }  h-full flex-none transition-all relative`}
      onClick={toggleDetail}
    >
      <div className="w-[400px] h-full bg-red-300 absolute p-2">preview</div>
      <div></div>
      <div className="ml-3 bg-gray-500 p-2">detail</div>
    </div>
  );
};
