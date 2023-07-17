import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";

export const DropdownDetail = ({ icon, heading, desc }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full bg-inherit border-b-2 border-solid border-b-custom-blue-light">
      <div
        className="w-full h-[100px] grid grid-cols-2 grid-rows-1 items-center font-extrabold text-2xl sm:text-4xl px-10 sm:px-24 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center">
          <span className="mr-5 sm:mr-10 bg-custom-blue-light p-2 rounded-full">
            {icon}
          </span>
          <h2>{heading}</h2>
        </div>
        <div className="justify-self-end">
          {show ? <Icon.DashCircle /> : <Icon.PlusCircle />}
        </div>
      </div>
      <div className={`${show ? "" : "hidden"} px-10 sm:px-24 pb-10`}>
        <p>{desc}</p>
      </div>
    </div>
  );
};
