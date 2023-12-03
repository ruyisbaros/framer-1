import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    //0 target begin, 1 target end
    target: heroRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); //target[index] than value[index]
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section
      ref={heroRef}
      className="relative h-screen py-16 w-full mb-[8rem] before:pointer-events-none"
      style={{ opacity }}
    >
      <div className="textBox w-full h-full flex justify-center ">
        <motion.div
          style={{ scale }}
          className="w-1/2 h-full flex flex-col items-center"
        >
          <h2 className="text-dark_text_1 text-[30px]">Scroll Animations</h2>
          <h2 className="text-dark_text_1 text-[30px]">With Framer</h2>
          <p className="text[14px] text-[#4e4b4b]">Developed by @ahmet</p>
          <h1 className="text-[60px] text-white">Scrolled</h1>
          <h1 className="text-[60px] text-white -mt-4">In View</h1>
          <p className="w-[60%] text-[#ddd] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            excepturi dolorum delectus unde at consequuntur, eveniet quod fuga
            sit ab voluptatum reiciendis laborum sapiente nostrum impedit hic
            blanditiis voluptas, autem adipisci, veritatis ex alias nihil
            deserunt. Eligendi neque at maiores?
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
