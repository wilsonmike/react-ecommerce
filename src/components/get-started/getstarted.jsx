import "./getstarted.styles.scss";
import Card from "react-bootstrap/Card";
import Store from "../../assets/store.png";
import tee from "../../assets/tee.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="over-arch">
      <div className="main">
        <div className="container">
          <h6 className="tagged">
            Open a store, shop t-shirts, or share photos
          </h6>
          <p>
            <em>Choose your category</em>
          </p>
        </div>
      </div>
      <div className="hashed">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={Store} />
          <Card.Body>
            <Card.Title>Start your store 100% Free</Card.Title>
            <Card.Text>
              Fill out a quick form, it's that simple. We use the information
              you provide to build a custom store and a unique t-shirt for you
              to approve.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <button className="btn btn-outline-primary btn-md  me-md-2 created">
              Create Store
            </button>
          </Card.Body>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={tee} />
          <Card.Body>
            <Card.Title>Find your loved ones store</Card.Title>
            <Card.Text>
              View a list of all active stores to purchase a custom t-shirt or
              post your photos. $10 from every shirt sold goes directly back to
              the store creator.
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Link to="/ashleychase">
              <button className="btn btn-outline-primary btn-md  me-md-2 created">
                Shop & Post
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default GetStarted;
