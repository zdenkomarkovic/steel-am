import { IconType } from "react-icons";
import { GiWeight } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { Md3dRotation } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { LuLightbulb } from "react-icons/lu";
import { GiFlexibleStar } from "react-icons/gi";
import { GiOnTarget } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { TfiControlShuffle } from "react-icons/tfi";
import { FaPeopleLine } from "react-icons/fa6";
import { LuFactory } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Projektovanje",
    link: "/projektovanje",
  },
  {
    title: "Izvodjenje",
    link: "/izvodjenje",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GoProjectRoadmap,
    title: "Projektovanje svih vrsta čeličnih konstrukcija",
    text: "Razvijamo idejna rešenja i tehničku dokumentaciju za različite vrste objekata, od industrijskih hala do stambenih i poslovnih objekata.",
  },
  {
    id: 2,
    icon: GoProjectSymlink,
    title: "Statički proračuni i izrada detalja konstrukcija",
    text: "Naši stručnjaci vrše detaljne analize i proračune kako bi konstrukcije bile stabilne, izdržljive i ekonomski isplative.",
  },
  {
    id: 3,
    icon: Md3dRotation,
    title: "3D modelovanje i vizuelizacija",
    text: "Korišćenjem savremenih softverskih alata izrađujemo precizne modele koji omogućavaju jasnu viziju krajnjeg proizvoda.",
  },
  {
    id: 4,
    icon: IoConstructOutline,
    title: "Proizvodnja i montaža čeličnih konstrukcija",
    text: "Izrađujemo i montiramo konstrukcije u skladu sa najvišim standardima, osiguravajući maksimalnu preciznost i sigurnost.",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "",
};
export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GrUserExpert,
    title: "Iskustvo i stručnost",
    text: "Naš tim inženjera i tehničara poseduje dugogodišnje iskustvo u projektovanju i izvođenju čeličnih konstrukcija.",
  },
  {
    id: 2,
    icon: MdHighQuality,
    title: "Kvalitet i preciznost",
    text: "Svaki projekat realizujemo sa maksimalnom pažnjom na detalje, osiguravajući dugotrajnost i sigurnost konstrukcija.",
  },
  {
    id: 3,
    icon: LuLightbulb,
    title: "Inovativna rešenja",
    text: "Korišćenjem najsavremenijih alata i softvera, pružamo optimizovane i efikasne konstrukcione rešenja.",
  },
  {
    id: 4,
    icon: GiFlexibleStar,
    title: "Fleksibilnost i prilagodljivost",
    text: "Prilagođavamo se specifičnim potrebama klijenata i nudimo personalizovana rešenja.",
  },
  {
    id: 5,
    icon: GiOnTarget,
    title: "Pouzdanost i tačnost",
    text: "Poštujemo dogovorene rokove i garantujemo visoke standarde u svim fazama projekta.",
  },
];

export interface ProcesData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const procesDataProjektovanje: ProcesData[] = [
  {
    id: 1,
    icon: RiSpeakLine,
    title: "Idejno rešenje",
    text: "Razvijamo osnovni koncept konstrukcije, uzimajući u obzir estetske, funkcionalne i ekonomske faktore.",
  },
  {
    id: 2,
    icon: GoProjectRoadmap,
    title: "Statički proračuni",
    text: "Naši inženjeri vrše precizne analize opterećenja kako bi konstrukcija bila stabilna, izdržljiva i optimizovana za dugoročnu upotrebu.",
  },
  {
    id: 3,
    icon: GoProjectSymlink,
    title: "Izrada tehničke dokumentacije",
    text: "Pripremamo sve potrebne nacrte i specifikacije u skladu sa važećim standardima i propisima.",
  },
  {
    id: 4,
    icon: Md3dRotation,
    title: "3D modelovanje i vizuelizacija",
    text: "Koristimo napredne softverske alate za izradu detaljnih modela koji omogućavaju klijentima jasan uvid u krajnji rezultat.",
  },
  {
    id: 5,
    icon: GrOptimize,
    title: "Optimizacija materijala i troškova",
    text: "Svaki projekat razvijamo sa ciljem da bude ekonomski isplativ, bez kompromisa u kvalitetu i sigurnosti.",
  },
];
export const procesDataIzvodjenje: ProcesData[] = [
  {
    id: 1,
    icon: FaPeopleLine,
    title: "Analiza potreba i planiranje",
    text: "Svaki projekat započinjemo detaljnom analizom zahteva klijenta i uslova na terenu.",
  },
  {
    id: 2,
    icon: GoProjectRoadmap,
    title: "Projektovanje i proračuni",
    text: "Naš tim inženjera izrađuje precizne tehničke nacrte i statičke proračune.",
  },
  {
    id: 3,
    icon: LuFactory,
    title: "Proizvodnja čeličnih elemenata",
    text: "Koristimo visokokvalitetne materijale i precizne metode obrade kako bismo osigurali dugotrajnost konstrukcije.",
  },
  {
    id: 4,
    icon: IoConstructOutline,
    title: "Montaža na terenu",
    text: "Naši timovi obavljaju montažu efikasno i sigurno, poštujući sve standarde i rokove.",
  },
  {
    id: 5,
    icon: TfiControlShuffle,
    title: "Završna kontrola i predaja projekta",
    text: "Svaka konstrukcija prolazi kroz detaljnu inspekciju pre završne isporuke.",
  },
];

export const projekti: string[] = [
  "/projekti.gif",
  "/projekti.jpeg",
  "/projekti (2).jpeg",
  "/projekti.png",
  "/projekti.webp",
];
export const izvodjenje: string[] = [
  "/izvodjenje.JPG",
  "/izvodjenje (2).JPG",
  "/izvodjenje (3).JPG",
  "/izvodjenje (4).JPG",
  "/izvodjenje (5).JPG",
  "/izvodjenje (6).JPG",
  "/izvodjenje (7).jpg",
  "/izvodjenje (8).jpg",
  "/izvodjenje (9).jpg",
  "/izvodjenje (10).jpg",
  "/izvodjenje (11).jpg",
];
