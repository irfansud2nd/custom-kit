import React, { useEffect, useRef, useState } from "react";
import { NavMenu } from "./navMenu/NavMenu";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", navbarAutoHide);
    return () => {
      window.removeEventListener("scroll", navbarAutoHide);
    };
  }, [lastScrollPos]);

  const navbarAutoHide = () => {
    if (window.scrollY > lastScrollPos) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollPos(window.scrollY);
  };

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("click", toggleMenu);
    }
    return () => {
      window.removeEventListener("click", toggleMenu);
    };
  }, [showMenu]);

  const toggleMenu = (event) => {
    console.log("navMenu", event.target.classList.contains("navMenu"));
    if (!event.target.classList.contains("navMenu")) {
      setShowMenu(false);
    }
  };

  return (
    <div
      className={`
    ${showNavbar ? "top-0" : "-top-full"}
    w-full fixed z-10 flex justify-center p-1 transition-all duration-400`}
    >
      <ul className="flex justify-center md:justify-between items-center w-4/5">
        <li className="hidden md:block">
          <a href="/#about">About</a>
        </li>
        <li className="hidden md:block">
          <a href="/product">Products</a>
        </li>
        <li>
          <a href="/#" className="text-4xl">
            Custom Kit
          </a>
        </li>
        <li className="hidden md:block">
          <a href="/#package">Package</a>
        </li>
        <li className="hidden md:block">
          <a href="/#contact">Contact Us</a>
        </li>
        <div
          className={`
          ${showMenu ? "hidden" : "absolute"}
          navMenu md:hidden  right-0 mr-2 border-2 border-solid border-black p-1 rounded-lg cursor-pointer`}
          onClick={() => setShowMenu(true)}
        >
          menu
        </div>
        <NavMenu show={showMenu} />
      </ul>
    </div>
  );
};
