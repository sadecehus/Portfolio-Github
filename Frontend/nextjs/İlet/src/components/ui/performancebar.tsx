"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const progressBars = [
  { id: 1, maxPercentage: 80 },
  { id: 2, maxPercentage: 60 },
  { id: 3, maxPercentage: 40 },
  { id: 4, maxPercentage: 20 },
];
const upbar = [{ id: 1, maxPercentage: 90 }];

const keywords = [
  "YÖNETİM",
  "VERİ",
  "ZAMAN",
  "FORM",
  "HEDEF",
  "OPTİMİZE",
  "DERECELENDİRME",
  "ANALİZ",
  "RAPORLAMA",
  "SÜREÇ",
  "YAYIN",
  "MAKALE",
];

const PerformanceProgress = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="flex flex-col items-start justify-start space-y-6 p-10">
      {/* Üst Bar */}
      <div className="flex justify-between w-full gap-20 items-center">
        <p className="text-3xl font-bold">PERFORMANCE.</p>
        {upbar.map((bar) => (
          <ProgressBar key={bar.id} scrollYProgress={scrollYProgress} maxPercentage={bar.maxPercentage} />
        ))}
      </div>

      {/* Alt Progress Barlar */}
      {progressBars.map((bar) => (
        <ProgressBar key={bar.id} scrollYProgress={scrollYProgress} maxPercentage={bar.maxPercentage} />
      ))}

      {/* Metin Efekti */}
      <div className="mt-6 flex flex-wrap gap-3">
        {keywords.map((keyword, index) => (
          <HoverText key={index} text={keyword} />
        ))}
      </div>
    </section>
  );
};

const ProgressBar = ({ scrollYProgress, maxPercentage }: { scrollYProgress: any; maxPercentage: number }) => {
  const width = useTransform(scrollYProgress, [0, 1], ["0%", `${maxPercentage * 1.35}%`]);

  return (
    <div className="w-full dark:bg-[#262626]/80 bg-[#EDEDED]/80 h-6 overflow-hidden">
      <motion.div
        className="h-full dark:bg-[#FAA405] bg-[#4400FF]/50"
        style={{ width }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
  );
};

// 🔥 Kelime kelime hover efekti (Animasyonlu renk değişimi)
const HoverText = ({ text }: { text: string }) => {
  return (
    <motion.span
      className="cursor-pointer text-2xl font-bold tracking-widest uppercase dark:text-[#262626]/80 text-[#E2E1E1]/80 transition-colors duration-300"
      whileHover={{ color: "var(--color-primary)" }} // Tailwind'in text-primary rengine bağlı
      transition={{ duration: 0.3 }}
    >
        {text}
    </motion.span>
  );
};

export default PerformanceProgress;
