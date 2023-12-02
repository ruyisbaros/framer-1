import React from "react";
import iphone from "../assets/images/iphone-14.jpg";
import holdIphone from "../assets/images/iphone-hand.png";
import rmOne from "../assets/rm1.png";
import rmTwo from "../assets/rm2.png";
import rmThree from "../assets/rm3.png";

const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={iphone} alt="iphone" className="logo" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img src={holdIphone} alt="" className="iphone-img" />
    </div>
  );
};

export default Jumbotron;
