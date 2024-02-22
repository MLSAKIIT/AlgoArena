import React from "react";
import Footer from "@/components/footer/Footer";
import Hero from "../components/hero/Hero";
import Features from "@/components/features/page";
import Domains from "@/components/domains/Domains";

const page = () => {
  return (
    <div className=" flex flex-col gap-8">
      <Hero />
      <Domains />
      <Features />
      <Footer />
    </div>
  );
};

export default page;
