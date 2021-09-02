import React from "react";
import { Form } from "react-bootstrap";
import "./userdetails.styles.scss";

const Story = () => {
  return (
    <div>
      <Form className="mt-5">
        <h4>Who will we be creating the store for?</h4>
        <Form.Group className="mt-5">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>Brief Summary of What Happened</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Brief Summary"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>
            What are their favorite color(s)? (this will help with the design)
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Favorite Colors (Ex: green, gold)"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Story;
