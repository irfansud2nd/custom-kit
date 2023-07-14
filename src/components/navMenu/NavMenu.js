import React from "react";

export const NavMenu = ({ show }) => {
  return (
    <div
      className={`
      ${show ? "translate-y-0" : "-translate-y-[110%]"}
         absolute md:hidden right-2 top-2 bg-gray-400 max-h-screen w-3/6 max-w-screen-md transition-all duration-300`}
    >
      <ul>
        <li className="navMenu flex border-2 border-solid border-black border-b-0 hover:border-b-2  w-full hover:-translate-y-1 hover:-translate-x-1  bg-white transition cursor-pointer">
          <a href="/#about" className="w-full  text-center py-3">
            About
          </a>
        </li>
        <li className="navMenu flex border-2 border-solid border-black border-b-0 hover:border-b-2 w-full hover:-translate-y-1 hover:-translate-x-1  hover:border-t-2 bg-white transition cursor-pointer">
          <a href="/product" className="w-full  text-center py-3">
            Product
          </a>
        </li>
        <li className="navMenu flex border-2 border-solid border-black border-b-0 hover:border-b-2 w-full hover:-translate-y-1 hover:-translate-x-1  hover:border-t-2 bg-white transition cursor-pointer">
          <a href="/#services" className="w-full  text-center py-3">
            Services
          </a>
        </li>
        <li className="navMenu flex border-2 border-solid border-black w-full hover:-translate-y-1 hover:-translate-x-1  bg-white transition cursor-pointer">
          <a href="/#contact" className="w-full  text-center py-3">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
