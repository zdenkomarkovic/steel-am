import ImageEditor from "@/components/ImageEditor";
import ProcesCard from "@/components/ProcesCard";
import { procesDataProjektovanje, projekti } from "@/constants/index";
import React from "react";

const page = () => {
  return (
    <div className="py-28">
      <div className="container px-2 md:px-4 mx-auto space-y-6 md:space-y-16">
        <h1 className="text-3xl md:text-7xl text-primary text-center">
          Projektovanje čeličnih konstrukcija
        </h1>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Ono što mi radimo jeste stvaranje preciznih, sigurnih i dugotrajnih
          konstrukcionih rešenja. Naše projektovanje čeličnih konstrukcija
          obuhvata sve faze – od idejnog rešenja do izrade tehničke
          dokumentacije, uz korišćenje najsavremenijih softverskih alata i
          metoda.
        </p>
        <ProcesCard data={procesDataProjektovanje} />
        <h2 className="text-3xl md:text-6xl text-primary text-center">
          Standardi i regulativa
        </h2>
        <p className=" text-lg md:text-2xl first-letter:pl-6">
          Svi naši projekti izrađuju se u skladu sa važećim građevinskim
          propisima i standardima. Pratimo najnovije tehničke regulative kako
          bismo obezbedili visok nivo sigurnosti i usaglašenost sa
          zakonodavstvom.
        </p>
        <ImageEditor images={projekti} />
      </div>
    </div>
  );
};

export default page;
