"use server";
import React from "react";
import { ProcesData } from "@/constants/index";
import MotionComponent2 from "./MotionComponent2";

const ProcesCard = ({ data }: { data: ProcesData[] }) => {
  return (
    <div className=" space-y-5  md:space-y-14">
      {" "}
      <h2 className="pl-10 text-2xl md:text-4xl text-primary">Naš proces...</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5  text-xl pb-510 text-primary">
        {data.map((item, i) => {
          const Iconcomponent = item.icon;
          return (
            <div
              key={item.id}
              className={`h-full ${
                i === 4 ? "col-span-full md:col-span-1" : ""
              }`}
            >
              <MotionComponent2>
                <div className="9 text-center space-y-3 mb-5">
                  <div className="mx-auto text-center">
                    <Iconcomponent className="mx-auto text-5xl" />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.text}</p>
                </div>
              </MotionComponent2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcesCard;
