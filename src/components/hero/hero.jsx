import React from "react";
import CarouselHero from "../carousel-hero/carousel-hero";
import MainAsset from "../../assets/mainasset.png";
import Collage from "../../assets/collage.png";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="container  col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Collage}
            class="d-block mx-lg-auto img-fluid main-asset"
            alt="Families wearing shirts made by Hope35"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className=" lh-1 mb-3 mt-5 main-tag">
            Support from friends and family improves recovery
          </h1>
          <hr className="hr-row" />
          <p className="sub-tag">
            Hope35 creates custom t-shirts and a unique online platform for
            their support team to share photos and words of encouragement.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg px-4 me-md-2"
            >
              Get Started
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
