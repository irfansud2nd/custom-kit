import React from "react";
import { MainHome } from "../components/home/MainHome";
import { Slides } from "../components/home/Slides";
import { Features } from "../components/home/Features";
import { ProductPreview } from "../components/home/ProductPreview";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { Contact } from "../components/home/Contact";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen w-full text-md">
      <Navbar />
      <MainHome />
      <Slides />
      <Features />
      <ProductPreview />
      <ServicesPreview />
      <Contact />
    </div>
  );
};
