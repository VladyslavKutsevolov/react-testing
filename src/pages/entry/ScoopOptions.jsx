import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ScoopOptions = (props) => {
  const [isValid, setIsValid] = useState(true);
  const { imagePath, name, updateItemCount } = props;

  const handleChange = (e) => {
    const currentValue = e.target.value;

    const currentFloat = parseFloat(e.target.value);

    const valid =
      0 <= currentFloat &&
      Math.floor(currentFloat) === currentFloat &&
      currentFloat <= 10;

    setIsValid(valid);

    if (valid) {
      updateItemCount(name, currentValue);
    }
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
            isInvalid={!isValid}
          ></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOptions;
