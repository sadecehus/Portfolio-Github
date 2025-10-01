'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const progressBars = [
  { id: 1, maxPercentage: 70 },
  { id: 2, maxPercentage: 60 },
  { id: 3, maxPercentage: 90 },
];
const centerBar = { id: 4, maxPercentage: 80 };

const ScrollProgressLines = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={ref} className="relative w-full flex items-center justify-center">
            <div className="relative flex gap-20">
                <ProgressBar key={progressBars[0].id} scrollYProgress={scrollYProgress} maxPercentage={progressBars[0].maxPercentage} />
                <ProgressBar key={centerBar.id} scrollYProgress={scrollYProgress} maxPercentage={centerBar.maxPercentage} reverse />
                <ProgressBar key={progressBars[2].id} scrollYProgress={scrollYProgress} maxPercentage={progressBars[2].maxPercentage} />
            </div>
        </section>
    );
};

const ProgressBar = ({ scrollYProgress, maxPercentage, reverse = false }: { scrollYProgress: any; maxPercentage: number; reverse?: boolean }) => {
    const height = useTransform(scrollYProgress, [0, 1], reverse ? [`${maxPercentage * 1.2}%`, "0%"] : ["0%", `${maxPercentage * 1.2}%`]);

    return (
        <div className="relative flex flex-col items-center">
            {reverse ? (
                <>
                    {/* Üst Daire */}
                    <div className="w-6 h-6 bg-[#F31260] dark:bg-[#FA8805] rounded-full" />
                    {/* Çizgi */}
                    <div className="w-[2px] h-64 bg-muted relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#F31260] dark:bg-[#FA8805]"
                            style={{ height }}
                        />
                    </div>
                </>
            ) : (
                <>
                    {/* Çizgi */}
                    <div className="w-[2px] h-64 bg-muted relative overflow-hidden">
                        <motion.div
                            className="absolute bottom-0 left-0 w-full bg-[#F31260] dark:bg-[#FA8805]"
                            style={{ height }}
                        />
                    </div>
                    {/* Alt Daire */}
                    <div className="w-6 h-6 bg-[#F31260] dark:bg-[#FA8805] rounded-full" />
                </>
            )}
        </div>
    );
};

export default ScrollProgressLines;