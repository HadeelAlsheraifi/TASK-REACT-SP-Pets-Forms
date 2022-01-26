import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import petStore from "../../petStore";

function PetCreateModel({ isOpen, handleClose }) {
  const [pet, setPet] = useState({
    name: " ",
    type: "",
    image: "",
    id: "",
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //this is prevent reload of the page
    petStore.handleAdd(pet);
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the pet name"
              onChange={handleChange}
              name="name"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>type</Form.Label>
            <Form.Control
              type="text"
              placeholder="check your pet type"
              onChange={handleChange}
              name="type"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// class PetModel {

// }

// const petModel = new PetModel();

export default PetCreateModel;
