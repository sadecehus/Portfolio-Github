"use client";


import { NeonGradientCard } from "./ui/neon-gradient-card";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaceIDIcon } from "./ui/faceid";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Opacity ayarları (yakınlaşınca görünür, uzaklaşınca kaybolur)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);

  // Yüksekliği ayarlayarak scroll boyunca aşağı kaymasını sağlıyoruz
  const yTransform = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 20, -20, -50]);

  return (
    <div className="h-[80vh] container mx-auto hidden md:flex justify-center items-center" id="about">
      <section id="about" className="mx-auto my-auto px-40 container w-full py-24 sm:py-32">
        <motion.div
          ref={ref}
          style={{ opacity, y: yTransform }}
          className="w-full flex justify-center items-center"
        >
          <NeonGradientCard className="flex  flex-col max-w-6xl w-full items-center justify-center">
            <div className="flex py-4 px-2">
              {/* Görsel Alanı */}
              <div className="hidden lg:flex w-1/4 justify-center items-center">
               <FaceIDIcon/>
              </div>

              {/* Metin Alanı */}
              <div className="w-full lg:w-3/4 flex-col justify-center items-center">
                <div>
                  <div className="pointer-events-none mx-4 px-2 z-10 h-full whitespace-pre-wrap dark:bg-white bg-[#0C0A09] bg-clip-text md:text-3xl sm:text-xl lg:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                    <span className="dark:text-green-500 text-blue-700">Biz</span> Kimiz?
                  </div>
                  <br />
                  <div className="text-[#262626] dark:text-[#BBBBBB] font-roboto font-medium text-xs sm:text-sm md:text-base lg:text-md leading-relaxed px-2 sm:px-6 text-justify mx-4">
                    Teknoloji, performans ve güven... 22 yıllık tecrübemizle lider
                    şirket ve kurumlara dijital deneyimler oluşturması için yardımcı oluyoruz.
                    <strong> İLET</strong>, yazılım mimarisinden kodlamaya, ürün tasarımından proje
                    yönetimine, grafikten UX'a kadar yenilikçi ve yaratıcı çözümler sunar.
                    <br />
                    <br />
                    Uygulamaların yaygınlaştığı cihaz türleri çeşitlendikçe,
                    entegre çalışması gereken sistemlerin sayısı artmakta ve veri
                    miktarı hızla ilerlemektedir. <strong>İLET</strong>, bu
                    noktada yarının uygulamalarını hızlı bir şekilde geliştirmek
                    ve dağıtmak için en iyi deneyimi sunar.
                  </div>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </motion.div>
      </section>
    </div>
  );
};
