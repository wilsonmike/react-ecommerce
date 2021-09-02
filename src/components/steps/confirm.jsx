import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const Confirm = () => {
  return (
    <div>
      <h4>Your form has been submitted successfully :innocent:</h4>
      <ListGroup style={{ maxWidth: "600px", margin: "auto" }}>
        <ListGroup.Item>FIRST NAME: </ListGroup.Item>
        <ListGroup.Item>LAST NAME: </ListGroup.Item>
        <ListGroup.Item>EMAIL: </ListGroup.Item>
        <ListGroup.Item>PHONE NUMBER: </ListGroup.Item>
        <ListGroup.Item>FIRST NAME: </ListGroup.Item>
        <ListGroup.Item>LAST NAME: </ListGroup.Item>
        <ListGroup.Item>EMAIL: </ListGroup.Item>
        <ListGroup.Item>PHONE NUMBER: </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Confirm;
