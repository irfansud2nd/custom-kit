import React, { useEffect, useRef, useState } from "react";
import { NavMenu } from "./navMenu/NavMenu";
import { List } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [transparet, setTransparent] = useState(true);

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
    if (window.scrollY > window.innerHeight) {
      setTransparent(false);
    } else {
      setTransparent(true);
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
    ${transparet ? "" : "bg-custom-white"}
    w-full fixed z-10 flex justify-center p-1 transition-all duration-400`}
    >
      <ul className="flex justify-center md:justify-between items-center w-4/5">
        <li className="hidden md:block cursor-pointer">
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="hidden md:block cursor-pointer">
          <Link to="/product">Product</Link>
        </li>
        <li>
          <a
            href="/#"
            className="text-3xl bg-custom-white italic border-2 border-black pr-2 rounded-lg font-sans"
          >
            <HashLink to="/#">
              CUSTOM<span className="font-bold">KIT</span>
            </HashLink>
          </a>
        </li>
        <li className="hidden md:block cursor-pointer">
          <HashLink to="/#package">Packages</HashLink>
        </li>
        <li className="hidden md:block cursor-pointer">
          <HashLink to="/#contact">Contact Us</HashLink>
        </li>
        <button
          className={`
          ${showMenu ? "hidden" : "absolute"}
          navMenu md:hidden  right-0 mr-2 border-2 border-solid border-black p-1 rounded-lg cursor-pointer`}
          onClick={() => setShowMenu(true)}
        >
          <List className="navMenu text-2xl" />
        </button>
        <NavMenu show={showMenu} />
      </ul>
    </div>
  );
};
