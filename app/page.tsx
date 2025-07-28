import About from "@/components/About";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards1Data } from "@/constants/index";
import BackgroundImage from "@/components/BackgroundImage";

import Cards1 from "@/components/Cards1";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <PozoviteNasOdmah />
      <Cards1 title={"Zasto Magnate Construct"} data={cards1Data} />
      <BackgroundImage />
    </div>
  );
}
