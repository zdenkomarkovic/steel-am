"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-background py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-muted">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link href="/" className=" hover:text-primary">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/" className=" hover:text-primary">
                  Usluge
                </Link>
              </li>

              <li>
                <Link href="/kontakt" className="hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381693333575">
                <p className="hover:text-primary">Telefon: +381 69 3333 575</p>
              </a>
            </div>
            <div>
              <a href="mailto:magnateconstruct@gmail.com">
                <p className=" hover:text-primary text-wrap">
                  Email: magnateconstruct@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61566384390398"
                className="hover:text-primary"
              >
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              Magnate Construct doo
            </h3>
            <p className=" font-bold ">
              administracija: Dr ilije Djuricica 2a Novi Sad
            </p>
            <p className=" font-bold ">proizvodnja: Rade Kondica 131 Futog</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 Magnate Construct doo. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold text-primary"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
