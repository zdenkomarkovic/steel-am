import { IconType } from "react-icons";
import { GiWeight } from "react-icons/gi";

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
    icon: GiWeight,
    title: "Projektovanje svih vrsta čeličnih konstrukcija",
    text: "Razvijamo idejna rešenja i tehničku dokumentaciju za različite vrste objekata, od industrijskih hala do stambenih i poslovnih objekata.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Statički proračuni i izrada detalja konstrukcija",
    text: "Naši stručnjaci vrše detaljne analize i proračune kako bi konstrukcije bile stabilne, izdržljive i ekonomski isplative.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "3D modelovanje i vizuelizacija",
    text: "Korišćenjem savremenih softverskih alata izrađujemo precizne modele koji omogućavaju jasnu viziju krajnjeg proizvoda.",
  },
  {
    id: 4,
    icon: GiWeight,
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
    icon: GiWeight,
    title: "Iskustvo i stručnost",
    text: "Naš tim inženjera i tehničara poseduje dugogodišnje iskustvo u projektovanju i izvođenju čeličnih konstrukcija.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Kvalitet i preciznost",
    text: "Svaki projekat realizujemo sa maksimalnom pažnjom na detalje, osiguravajući dugotrajnost i sigurnost konstrukcija.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Inovativna rešenja",
    text: "Korišćenjem najsavremenijih alata i softvera, pružamo optimizovane i efikasne konstrukcione rešenja.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Fleksibilnost i prilagodljivost",
    text: "Prilagođavamo se specifičnim potrebama klijenata i nudimo personalizovana rešenja.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pouzdanost i tačnost",
    text: "Poštujemo dogovorene rokove i garantujemo visoke standarde u svim fazama projekta.",
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
  "/izvodjenje.jpg",
  "/izvodjenje (2).jpg",
  "/izvodjenje (3).jpg",
  "/izvodjenje (4).jpg",
  "/izvodjenje (5).jpg",
  "/izvodjenje (6).jpg",
  "/izvodjenje (7).jpg",
  "/izvodjenje (8).jpg",
  "/izvodjenje (9).jpg",
  "/izvodjenje (10).jpg",
  "/izvodjenje (11).jpg",
];
