import { useState } from "react";
import "./ashleychase.styles.scss";
import Ashley from "../../assets/ashleychase.PNG";
import blueashley from "../../assets/blue-ashley.png";
import pinkashley from "../../assets/pink-ashley.png";
import UploadForm from "../upload-form/UploadForm";
import ImageGrid from "../image-grid/ImageGrid";
import Modal from "../modal/Modal";

const AshleyChase = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="master-background">
      <div className="main">
        <div className="container">
          <div className="card p-3 mb-5 bg-white rounded profile-container">
            {/* <div className="comments-container">
              Comments <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </div> */}
            <div className="image-name">
              <img
                className="ashley align-middle"
                src={Ashley}
                alt="Ashley Chase"
              />
              <h6 className="store-owner">Ashley Chase</h6>
              <p className="store-owner-summary">
                On 7/14, Ashley was diagnosed with a Grade 3 Astrocytoma – a
                malignant brain tumor.{" "}
              </p>
              <hr />
              <div className="text-raised">$2,800 Raised</div>
              <UploadForm />
              {/* <button className="btn btn-md message-btn">
                <strong>Post for Ashley to see</strong>
              </button> */}
            </div>
            <div className="tshirt-container">
              <div className="t-box">
                <img
                  className="t-image"
                  src={blueashley}
                  alt="ashley chase blue shirt"
                />
                <h5>Team Ashley Blue Tee</h5>
                <p className="t-details">Softest 50/50 blend</p>
                <button className="order-now">Order</button>
              </div>
              <div className="t-box">
                <img
                  className="t-image"
                  src={pinkashley}
                  alt="ashley chase pink shirt"
                />
                <h5>Team Ashley Pink Tee</h5>
                <p className="t-details">Softest 50/50 blend</p>
                <button className="order-now">Order</button>
              </div>
            </div>
          </div>
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AshleyChase;
