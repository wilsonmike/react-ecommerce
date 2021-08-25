import "./ashleychase.styles.scss";
import Ashley from "../../assets/ashleychase.PNG";
import Badge from "react-bootstrap/Badge";
import blueashley from "../../assets/blue-ashley.png";
import pinkashley from "../../assets/pink-ashley.png";
import Button from "react-bootstrap/Button";
const AshleyChase = () => {
  return (
    <div className="master-background">
      <div className="main">
        <div className="container">
          <div className="card shadow p-3 mb-5 bg-white rounded profile-container">
            <div className="comments-container">
              Comments <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </div>
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
              <div class="">$2,800 Raised</div>
              <hr />
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
            <button className="btn btn-md message-btn">
              <strong>Post</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AshleyChase;
