import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const Sections = () => {
  return (
    <div className="relative z-10 w-full overflow-x-clip">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Sections;
