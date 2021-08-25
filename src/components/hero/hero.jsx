import React from "react";
import Collage from "../../assets/collage.png";
import { Link } from "react-router-dom";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="raster">
      <div className="container  col-xxl-8 px-4 py-5">
        <div className="row flex-lg-column-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Collage}
              className="d-block mx-lg-auto img-fluid main-asset"
              alt="Families wearing shirts made by Hope35"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 align-items-center text-align-center">
            <h1 className=" lh-1 mb-3 mt-5 main-tag">
              Support from friends and family improves recovery
            </h1>
            <hr className="hr-row" />
            <p className="sub-tag">
              Hope35 creates custom t-shirts and a unique online platform to
              share photos and words of encouragement
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
              <Link to="/get-started" currentpath="/">
                <button
                  type="button"
                  className="btn gradient-button gradient-button-3 btn-md  me-md-2"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
