import Cards2Kosina from "@/components/Cards2Kosina";
import { cards2Data, cards2DataText } from "@/constants/index";
import React from "react";

const About = () => {
  return (
    <div className=" pb-10 md:py-20">
      <div className="container px-2 md:px-4 mx-auto space-y-10">
        <h2 className="text-3xl md:text-8xl text-center text-primary">
          Steel Am
        </h2>
        <p className="first-letter:pl-6 text-xl md:text-3xl">
          Steel-AM je kompanija specijalizovana za{" "}
          <span className="font-bold text-primary">
            projektovanje, proizvodnju i montažu čeličnih konstrukcija
          </span>{" "}
          projektovanje, proizvodnju i montažu čeličnih konstrukcija. Sa
          dugogodišnjim iskustvom i timom visokokvalifikovanih inženjera i
          tehničara, pružamo{" "}
          <span className="font-bold text-primary">kompletna rešenja</span> koja
          zadovoljavaju najviše standarde kvaliteta i sigurnosti. Naš cilj je da
          klijentima obezbedimo pouzdane i dugotrajne konstrukcije koje
          odgovaraju svim njihovim potrebama.
        </p>
        <Cards2Kosina
          title={"Naše usluge i rešenja"}
          data={cards2Data}
          text={cards2DataText}
        />
        <h3 className="text-2xl md:text-6xl text-primary text-center ">
          Naša mreža u regionu
        </h3>
        <p className="first-letter:pl-6 text-xl md:text-3xl">
          Steel-AM uspešno realizuje projekte u{" "}
          <span className="font-bold text-primary">
            Srbiji, Hrvatskoj i Sloveniji
          </span>
          . Naša kompanija je prepoznata po visokom kvalitetu usluge, stručnosti
          i profesionalizmu. Bilo da je reč o malim ili velikim projektima, naš
          tim je spreman da pruži podršku i rešenja prilagođena specifičnim
          potrebama klijenata.
        </p>
        <p className="first-letter:pl-6 text-xl md:text-3xl">
          Kontaktirajte nas za više informacija i konsultacije! Naš tim je uvek
          spreman da odgovori na vaša pitanja i pruži stručnu pomoć.
        </p>
      </div>
    </div>
  );
};

export default About;
