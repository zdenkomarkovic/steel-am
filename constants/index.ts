export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    list: [
      {
        title: "Projektovanje",
        link: "",
      },
      {
        title: "Proizvodnja",
        link: "",
      },
      {
        title: "Montaza",
        link: "",
      },
    ],
  },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface ProductList {
  id: number;
  title: string;
  text: string;
  price: number;
  images: string[];
}

export const productList = [
  {
    id: 1,
    title: "Listele biber crepa 30x15cm",
    text: "Listele secene od biber crepa , 30x15 , idealne za podne obloge , kao i za zidne , prirodni materijali seceni od starog biber crepa , otporni na sve spoljne uticaje , trpe teret preko 12 tona... cena 7 eura 1m²",
    price: 7,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Listele biber crepa 30x15.jpg",
      "/Listele biber crepa 30x15 2.jpg",
      "/Listele biber crepa 30x15 3.jpg",
      "/Listele biber crepa 30x15 4.jpg",
      "/Listele biber crepa 30x15 5.jpg",
      "/Listele biber crepa 30x15 6.jpg",
    ],
  },
  {
    id: 2,
    title: "Listele od biber crepa 15x5 cm",
    text: "Listele od biber crepa 15 x 5 cm idealno resenje za zidne obloge , opis je u sustini isti prirodni materijali , otporni na spoljasnje uticaje cena 14 eura m²",
    price: 14,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Listele od biber crepa 15x5 cm 2.jpg",
      "/Listele od biber crepa 15x5 cm.jpg",
    ],
  },
  {
    id: 3,
    title: "Dekorativne ciglice od biber crepa 8x30 cm",
    text: "Dekorativne ciglice secene od biber crepa 8x30 cm, za zidne i podne obloge , za spoljne kao i unutrasnje dekoracije , i fasade... otporne na sve spoljne uticaje , prirodni materijali opet opis neki kao i za ostale",
    price: 9,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Dekorativne ciglice od biber crepa 8x30 cm 2.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 3.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 4.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 5.jpg",
    ],
  },
  {
    id: 4,
    title: "Listele i dekorativne ciglice 15 x 30 cm",
    text: "Listele i dekorativne ciglice 15x 30 kombinacija zutih i crvenih, opis je u sustini opet isti, pogodno za zidne i podne obloge, trpe teret, imaju visok procenat toplotne izolacije",
    price: 9,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Listele i dekorativne ciglice 15 x 30 cm.jpg",
      "/Listele i dekorativne ciglice 15 x 30 cm 2.jpg",
    ],
  },
  {
    id: 5,
    title: "Dekorativne ciglice 26x5,5 cm",
    text: "Dekorativne ciglice 26x5,5 cm simulacija fasadne cigle , opis na isti fazon",
    price: 11,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: ["/Dekorativne ciglice 26x5,5 cm.jpg"],
  },
  {
    id: 6,
    title: "Dekorativna italijanska ciglica",
    text: "Dekorativna izalijanska ciglica , idealne za fasade , i kao i detalje, otporne na spoljasnje uticaje , izrada se radi po narudzbini, cena 60 e m²",
    price: 60,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Dekorativna italijanska ciglica.jpg",
      "/Dekorativna italijanska ciglica2.jpg",
      "/Dekorativna italijanska ciglica3.jpg",
      "/Dekorativna italijanska ciglica4.jpg",
      "/Dekorativna italijanska ciglica5.jpg",
      "/Dekorativna iatlijanska ciglica6.jpg",
      "/Dekorativna italijanska ciglica7.jpg",
      "/Dekorativna italijanska ciglica8.jpg",
    ],
  },
  {
    id: 7,
    title: "Listele od biber crepa 30x15 zute",
    text: "Listele od biber crepa 30x15 zuta , za podne i zidne obloge , isto opis, 10 e m²",
    price: 3,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Listele od biber crepa 30x15 zute.jpg",
      "/Listele od biber crepa 30x15 zute2.jpg",
    ],
  },
  {
    id: 8,
    title: "Prirodni lomljeni kamen",
    text: "Prirodni lomljeni kamen, 100 posto prirodni materijal, pogodan za zidne i podne obloge , otporan na velike terete , kao i sve spoljne uticaje",
    price: 7,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: [
      "/Prirodni lomljeni kamen.jpg",
      "/Prirodni lomljeni kamen 2.jpg",
      "/Prirodni lomljeni kamen 3.jpg",
      "/Prirodni lomljeni kamen 4.jpg",
      "/Prirodni lomljeni kamen 5.jpg",
    ],
  },
  {
    id: 9,
    title: "Suvi zid, od prirodnog kamena",
    text: "Suvi zid, od prirodnog kamena iskljucivo za zidne povrsine , otporan na sve spoljne uticaje",
    price: 12,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: [
      "/Suvi zid, od prirodnog kamena.jpg",
      "/Suvi zid, od prirodnog kamena 2.jpg",
    ],
  },
  {
    id: 10,
    title: "Seceni prirodni kamen stanglica 3cm",
    text: "Seceni prirodni kamen, stanglice tigraste sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 21 eura , 8 cm 20 eura",
    price: 22,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen stanglica.jpg"],
  },
  {
    id: 11,
    title: "Seceni prirodni kamen stanglica 5cm",
    text: "Seceni prirodni kamen, stanglice tigraste sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 21 eura , 8 cm 20 eura",
    price: 21,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen stanglica.jpg"],
  },
  {
    id: 12,
    title: "Seceni prirodni kamen stanglica 8cm",
    text: "Seceni prirodni kamen, stanglice tigraste sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 21 eura , 8 cm 20 eura",
    price: 20,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen stanglica.jpg"],
  },
  {
    id: 13,
    title: "Seceni prirodni kamen, stanglice plave 3cm",
    text: "Seceni prirodni kamen, stanglice plave sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 20 eura , 8 cm 19 eura",
    price: 22,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen, stanglice plave.jpg"],
  },
  {
    id: 14,
    title: "Seceni prirodni kamen, stanglice plave 5cm",
    text: "Seceni prirodni kamen, stanglice plave sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 20 eura , 8 cm 19 eura",
    price: 20,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen, stanglice plave.jpg"],
  },
  {
    id: 15,
    title: "Seceni prirodni kamen, stanglice plave 8cm",
    text: "Seceni prirodni kamen, stanglice plave sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 20 eura , 8 cm 19 eura",
    price: 19,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen, stanglice plave.jpg"],
  },
  {
    id: 16,
    title: "Seceni prirodni kamen, stanglice bronza 3cm",
    text: "Seceni prirodni kamen, stanglice bronza sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 21,5eura m² , 5 cm 20,5 eura , 8 cm 19 eura",
    price: 21.5,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen, stanglice bronza.jpg"],
  },
  {
    id: 17,
    title: "Seceni prirodni kamen, stanglice bronza 5cm",
    text: "Seceni prirodni kamen, stanglice bronza sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 21,5eura m² , 5 cm 20,5 eura , 8 cm 19 eura",
    price: 20.5,
    karakteristike: [
      "podna i zidna obloga",
      "prirodni materijali",
      "za unutrasnju ugradnju",
      "za spoljasnju i unutrasnju ugradnju",
      "otporni na spoljne uticaje",
      "trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen, stanglice bronza.jpg"],
  },
  {
    id: 18,
    title: "Seceni prirodni kamen, stanglice bronza 8cm",
    text: "Seceni prirodni kamen, stanglice bronza sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 21,5eura m² , 5 cm 20,5 eura , 8 cm 19 eura",
    price: 19,
    karakteristike: [
      " - podna i zidna obloga",
      " - prirodni materijali",
      " - za unutrasnju ugradnju",
      " - za spoljasnju i unutrasnju ugradnju",
      " - otporni na spoljne uticaje",
      " - trpi opterecenje 12 tona",
    ],
    images: ["/Seceni prirodni kamen, stanglice bronza.jpg"],
  },
];
