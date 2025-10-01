"use client";

import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ArrowDown } from "lucide-react";
import { motion,} from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Hero = () => {
  const [scrollValues, setScrollValues] = useState({
    opacity: 1,
    textX: 0,
    textY: 0,
    cardX: 0,
    cardY: 0,
    shadowOpacity: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.5;

      const progress = Math.min(scrollY / maxScroll, 1);

      setScrollValues({
        opacity: 1 - progress,
        textX: -150 * progress,
        textY: 100 * progress,
        cardX: 150 * progress,
        cardY: 100 * progress,
        shadowOpacity: 1 - progress,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="mx-auto container grid lg:grid-cols-2 place-items-center px-24 py-16 md:py-28 gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ opacity: scrollValues.opacity }}
    >
      {/* Hero Yazılar */}
      <motion.div
        className="text-center lg:text-start space-y-6 mb-8"
        style={{
          opacity: scrollValues.opacity,
          x: scrollValues.textX,
          y: scrollValues.textY,
        }}
      >
        <div className="text-4xl/[0.85] sm:text-7xl/[0.85] lg:text-6xl/[0.85] xl:text-8xl/[0.85] font-bold mb-8">
         <p> İlet'e <br /> Hoşgeldin!</p>
        </div>
        <p className="text-lg text-muted-foreground">
          İlet, gelişmiş bir bilişim hizmetleri sağlayıcısıdır. Gelişmeniz ve büyümeniz için
          kullanabileceğiniz birçok farklı araç sunar.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
       <Link href="#about" passHref>
  <Button
    onClick={(e) => {
      e.preventDefault();
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="flex items-center bg-transparent justify-center rounded-xl gap-2 mt-12 px-6 py-3 border-2 transition-all 
      dark:border-green-500 border-blue-500 
      text-blue-500 dark:text-green-500 
      dark:hover:bg-green-500 hover:bg-blue-500 
      hover:text-white dark:hover:text-black mx-auto lg:mx-0" 
  >
    İleti Keşfet <ArrowDown className="w-5 h-5" />
  </Button>
</Link>

        </motion.div>
      </motion.div>

      {/* Hero Cards (Sağa ve Aşağı Kayacak) */}
      <motion.div
        className="z-10"
        style={{
          opacity: scrollValues.opacity,
          x: scrollValues.cardX,
          y: scrollValues.cardY,
        }}
      >
        <HeroCards />
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        className="shadow"
        style={{ opacity: scrollValues.shadowOpacity }}
      ></motion.div>
    </motion.section>
  );
};
