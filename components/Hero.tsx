"use client";

import Hero1 from "../public/hero1.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="container md:px-4 mx-auto relative">
        <Image
          src={Hero1}
          width={800}
          height={600}
          alt="hero"
          className="w-full md:w-1/2 md:absolute top-0 left-0 md:pr-5 h-1/2 -z-10 object-cover"
        />
        <div className="md:pt-[100px] md:pl-5 md:w-1/2 md:h-1/2 ml-auto">
          <h1 className="text-primary text-2xl text md:text-6xl font-bold pt-[100px] md:pt-[150px] text-center">
            STEEL AM CONSTRUCTIONS
          </h1>

          {/* <div className="flex flex-col gap-4 md:flex-row">
            <Link href="/proizvodi">
              <motion.button
                whileHover={{ translateY: "-5px" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary text-foreground px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
              >
                Istražite naše proizvode
                <ArrowRightIcon className="w-[18px]" />
              </motion.button>
            </Link>
            <a href="tel:+3816000000">
              <motion.button
                whileHover={{ translateY: "-5px" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-background border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
              >
                Pozovite odmah
              </motion.button>
            </a>
          </div> */}
        </div>
        <h2 className=" font-bold  text-xl md:text-5xl px-4 pt-10 md:pt-20">
          Projektovanje svih vrsta čeličnih konstrukcija, statički proračuni,
          detalji konstrukcija , 3D modelovanje, proizvodnja i montaža.
        </h2>
      </div>
    </div>
  );
};

export default Hero;

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 "
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
