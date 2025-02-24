import ImageEditor from "@/components/ImageEditor";
import { izvodjenje, projekti } from "@/constants/index";
import React from "react";

const page = () => {
  return (
    <div className="py-28">
      <div className="container px-2 md:px-4 mx-auto space-y-16">
        <h1 className="text-8xl text-primary text-center">Izvedeni radovi</h1>
        <ImageEditor images={izvodjenje} />
      </div>
    </div>
  );
};

export default page;
