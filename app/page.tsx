import About from "@/components/About";
import Cards2Kosina from "@/components/Cards2Kosina";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";
import BackgroundImage from "@/components/BackgroundImage";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Cards1 from "@/components/Cards1";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <PozoviteNasOdmah />
      <Cards1 title={"Zasto Steel Am"} data={cards1Data} />
      <BackgroundImage />
    </div>
  );
}
