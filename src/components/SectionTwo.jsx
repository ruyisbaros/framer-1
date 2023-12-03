import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { BranchIcon } from "../icons/BranchIcon";
import loadingImg from "../assets/loading-screen.png";
import unspl from "../assets/unspl.jpg";
import imgOne from "../assets/main-screen.png";
import imgTwo from "../assets/img2.jpg";
import branch from "../assets/branchIcon.png";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.95,
  endTextFadeInEnd: 1,
};

const SectionTwo = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [3, 1, 1, 0.5]
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchEnd,
    ],
    ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "-27%"]
  );

  const loadingScreenOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
    ],
    [0, 1]
  );
  const loadingScreenX = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    ["0%", "27%"]
  );
  const loadingScreenScale = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    [1, 0.5]
  );

  const newBranchOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.createBranchFadeInStart,
      animationOrder.createBranchFadeInEnd,
    ],
    [0, 1]
  );

  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    [0, 1, 0]
  );
  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const paragraph2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    [0, 1, 0]
  );
  const paragraph2TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    ["4rem", "0rem", "-4rem"]
  );
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );
  const endTextOpacity = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    [0, 1]
  );

  const endTextY = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    ["4rem", "0rem"]
  );
  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh]">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <motion.div
            style={{ opacity, "--scale": scale, "--x": x }}
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "
          >
            <img alt="" src={imgOne} className="h-[75vh] mx-h-[48vh] w-auto" />
            <motion.span
              style={{ opacity: newBranchOpacity }}
              className="mt-3 block text-2xl text-white"
            >
              {" "}
              Animation with Framer
            </motion.span>
          </motion.div>
          <motion.div
            style={{
              opacity: loadingScreenOpacity,
              "--scale": loadingScreenScale,
              "--x": loadingScreenX,
            }}
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "
          >
            <img
              alt=""
              src={loadingImg}
              className="h-[75vh] mx-h-[48vh] w-auto"
            />
            <motion.div
              style={{ opacity: newBranchOpacity }}
              className="absolute inset-0"
            >
              <img
                alt=""
                src={imgOne}
                className="h-[75vh] mx-h-[48vh] w-auto"
              />
            </motion.div>
            <motion.span
              style={{ opacity: newBranchOpacity }}
              className="mt-3 block text-2xl text-white"
            >
              <BranchIcon className="mr-3 inline-block h-12 w-12" /> Frontend
              Development Trials
            </motion.span>
          </motion.div>
          <motion.p
            style={{ opacity: endTextOpacity, "--y": endTextY }}
            className="translate-y-centered-offset absolute top-1/2 left-[calc(50%-60rem)] w-[50rem] pl-16 text-2xl leading-tight text-white"
          >
            <span className="text-primary">Lorem, ipsum dolor.</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aliquid?
          </motion.p>
        </div>
        <motion.p
          style={{
            opacity: paragraph1Opacity,
            "--y": paragraph1TranslateY,
            position,
          }}
          className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] pl-16 text-2xl leading-tight text-white"
        >
          Lorem ipsum dolor sit,
          <br />
          <span className="text-primary">Lorem, ipsum dolor.</span>
        </motion.p>
        <motion.p
          style={{
            opacity: paragraph2Opacity,
            "--y": paragraph2TranslateY,
            position,
          }}
          className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] pr-16 text-xl leading-tight text-white"
        >
          Lorem ipsum dolor sit amet.
          <br />
          <span className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default SectionTwo;
