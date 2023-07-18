import React from "react";
import { MainHome } from "../components/home/MainHome";
import { Slides } from "../components/home/Slides";
import { ProductPreview } from "../components/home/ProductPreview";
import { PackagesPreview } from "../components/home/PackagesPreview";
import { Contact } from "../components/home/Contact";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen w-full text-md text-custom-black bg-custom-white font-poppins">
      <Navbar />
      <MainHome />
      <Slides />
      <ProductPreview />
      <PackagesPreview />
      <Contact />
    </div>
  );
};
