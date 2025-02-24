import ImageEditor from "@/components/ImageEditor";
import ProcesCard from "@/components/ProcesCard";
import { izvodjenje } from "@/constants/index";
import React from "react";

const page = () => {
  return (
    <div className="py-28">
      <div className="container px-2 md:px-4 mx-auto space-y-6 md:space-y-16">
        <h1 className="text-3xl md:text-7xl text-primary text-center">
          Izvedeni radovi – Naša realizovana rešenja
        </h1>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Ono što mi radimo jeste kreiranje pouzdanih, preciznih i dugotrajnih
          čeličnih konstrukcija koje zadovoljavaju najviše standarde kvaliteta i
          sigurnosti. Kroz godine rada, uspešno smo realizovali brojne projekte
          u različitim industrijama, prilagođene specifičnim potrebama
          klijenata. Naša stručnost, posvećenost i inovativni pristup omogućili
          su nam da isporučimo konstrukcije koje su funkcionalne, estetski
          usklađene i dugotrajne.
        </p>
        <ProcesCard />
        <h2 className="text-3xl md:text-6xl text-primary text-center">
          Standardi i regulativa
        </h2>
        <p className=" text-lg md:text-2xl first-letter:pl-6">
          Svi naši projekti izrađuju se u skladu sa važećim građevinskim
          propisima i standardima. Pratimo najnovije tehničke regulative kako
          bismo obezbedili visok nivo sigurnosti i usaglašenost sa
          zakonodavstvom.
        </p>
        <ImageEditor images={izvodjenje} />
      </div>
    </div>
  );
};

export default page;
