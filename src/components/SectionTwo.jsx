import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { BranchIcon } from "../icons/BranchIcon";
import loadingImg from "../assets/loading-screen.png";
import unspl from "../assets/unspl.jpg";
import imgOne from "../assets/img1.jpg";
import branch from "../assets/branchIcon.png";

const SectionTwo = () => {
  const targetRef = useRef(null);
  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh]">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <div className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center ">
            <img alt="" src={imgOne} className="h-auto w-full" />
            <img
              alt=""
              className="absolute left-[13%] top-1/2 h-[1.5vw] w-[1.5vw] translate-y-1/2 rounded-full border border-[#c82] object-cover will-change-transform"
              src={unspl}
            />
            <span className="mt-3 block text-2xl text-white">
              <img
                src={branch}
                alt=""
                className="mr-3 inline-block h-12 w-12"
              />{" "}
              Feature branch
            </span>
          </div>
          <div className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center">
            <img src={loadingImg} alt="" className="h-auto w-full" />
            <div className="absolute inset-0">
              <img src={imgOne} alt="" className="h-auto w-full" />
            </div>
            <span className="mt-3 block text-2xl text-white">
              <BranchIcon className="mr-3 inline-block h-12 w-12" /> Frontend
              FYI's branch
            </span>
          </div>

          <p className="translate-y-centered-offset absolute top-1/2 left-[calc(50%-60rem)] w-[50rem] pl-16 text-2xl leading-tight text-white">
            <span className="text-primary">Built for flow</span>
            <br />
            Spin up a new branch for any sized project in seconds.
          </p>
        </div>
        <p className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] pl-16 text-2xl leading-tight text-white">
          Not only share code,
          <br />
          <span className="text-primary">share the context.</span>
        </p>
        <p className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] pr-16 text-xl leading-tight text-white">
          Sometimes it's not about code.
          <br />
          <span className="text-primary">
            Get everybody on the same page. Literally.
          </span>
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
