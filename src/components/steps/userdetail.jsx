import React from "react";
import { Form } from "react-bootstrap";
import "./userdetails.styles.scss";

const UserDetail = () => {
  return (
    <div>
      <Form className="mt-5">
        <h4>Who will we be working with to create your store?</h4>
        <Form.Group className="mt-5">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserDetail;
