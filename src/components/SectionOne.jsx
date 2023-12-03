import React, { useRef } from "react";
import imgOne from "../assets/main-screen.png";
import imgMain from "../assets/main-screen.png";
import { useScroll, useTransform, motion } from "framer-motion";

const SectionOne = () => {
  const targetRef = useRef(null);
  const extendedRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    //0 target begin, 1 target end
    target: extendedRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0%", "-35%", "-60%", "0%"]
  );

  return (
    <section className="-mt-[30vh] ">
      <div ref={targetRef} className="w-full h-[300vh] ">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, opacity }} className="origin-top">
              <img src={imgOne} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
