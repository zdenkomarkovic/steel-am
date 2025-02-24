import React from "react";
import {
  // Hammer, Truck, Lightbulb,
  Speech,
} from "lucide-react";
// import { motion } from "framer-motion";
import { ProcesData } from "@/constants/index";
import MotionComponent2 from "./MotionComponent2";

const ProcesCard = ({ data }: { data: ProcesData[] }) => {
  return (
    <div className=" space-y-5 md:space-y-10">
      {" "}
      <h2 className="text-2xl md:text-4xl text-primary">Naš proces...</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5  text-xl pb-510 text-primary">
        {data.map((item) => {
          return (
            <MotionComponent2>
              <div className="text-center space-y-3 mb-5">
                <Speech className="mx-auto w-12 h-12" />
                <h3>{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.text}</p>
              </div>
            </MotionComponent2>
          );
        })}
        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-center space-y-3 mb-5"
        >
          <Speech className="mx-auto w-12 h-12" />
          <h3>Idejno rešenje</h3>
          <p className="text-muted-foreground text-base">
            {" "}
            Razvijamo osnovni koncept konstrukcije, uzimajući u obzir estetske,
            funkcionalne i ekonomske faktore.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-center space-y-3 mb-5"
        >
          <Lightbulb className="mx-auto w-12 h-12" />
          <h3>Statički proračuni</h3>
          <p className="text-muted-foreground text-base">
            Naši inženjeri vrše precizne analize opterećenja kako bi
            konstrukcija bila stabilna, izdržljiva i optimizovana za dugoročnu
            upotrebu.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-center space-y-3 mb-5"
        >
          <Hammer className="mx-auto w-12 h-12 " />
          <h3>Izrada tehničke dokumentacije</h3>
          <p className="text-muted-foreground text-base">
            {" "}
            Pripremamo sve potrebne nacrte i specifikacije u skladu sa važećim
            standardima i propisima.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-center space-y-3 mb-5"
        >
          <Truck className="mx-auto w-12 h-12" />
          <h3>3D modelovanje i vizuelizacija</h3>
          <p className="text-muted-foreground text-base">
            Koristimo napredne softverske alate za izradu detaljnih modela koji
            omogućavaju klijentima jasan uvid u krajnji rezultat.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-center space-y-3 mb-5"
        >
          <Truck className="mx-auto w-12 h-12" />
          <h3>Optimizacija materijala i troškova</h3>
          <p className="text-muted-foreground text-base">
            Svaki projekat razvijamo sa ciljem da bude ekonomski isplativ, bez
            kompromisa u kvalitetu i sigurnosti.
          </p>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ProcesCard;
