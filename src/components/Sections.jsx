import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Sections = () => {
  return (
    <div className="relative z-10 w-full overflow-x-clip">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Sections;
