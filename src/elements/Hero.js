import React from "react";
import { NavLink } from "react-router-dom";
import { heroContent } from "../content/elementContents/HeroContent";

const Hero = () => {
  return (
    <div
      className="homepage__hero"
      style={{ backgroundImage: `url(${heroContent.img})` }}
    >
      <div className="homepage__hero__container">
        <div className="homepage__hero__container__subtext1">
            {heroContent.subtext1}
        </div>
        <div className="homepage__hero__container__title">
          <h1>{heroContent.title} <span className="titleName1">{heroContent.title2}</span> <span className="titleName2">{heroContent.title3}</span></h1>
        </div>
        <div className="homepage__hero__container__dash">
          <div className="homepage__hero__container__dash__line"></div>
        </div>
        <div className="homepage__hero__container__subtext2">
            {heroContent.subtext2}
        </div>
        <div className="homepage__hero__container__buttons">
          <NavLink to={heroContent.buttonLink1}>
            <button className="homepage__hero__container__buttons__button">
              {heroContent.buttonText1}
            </button>
          </NavLink>
          <NavLink to={heroContent.buttonLink2}>
            <button className="homepage__hero__container__buttons__button secondary">
              {heroContent.buttonText2}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
