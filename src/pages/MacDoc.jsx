import { useMotionValue, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const MacDoc = () => {
  let mouseX = useMotionValue(0);

  return (
    <div className="mainDoc flex flex-col justify-center items-center pb-10">
      <div
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
          //console.log(e.pageX);
        }}
        className=" mx-auto flex h-16 items-center justify-center gap-4 rounded-2xl bg-gray-700 p-5"
      >
        {[...Array(6).keys()].map((item, i) => (
          <AppIcon key={i} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
};

const AppIcon = ({ mouseX }) => {
  const iconRef = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = iconRef.current?.getBoundingClientRect();
    console.log(bounds.x);
  });
  let width = useTransform(mouseX, [0, 300, 600], [40, 110, 40]);
  return (
    <motion.div
      ref={iconRef}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-500 cursor-pointer"
    ></motion.div>
  );
};

export default MacDoc;
