import React, { useState, useEffect } from "react";
import { useOrderDetails } from "../../context/orderDetails";
import axios from "axios";
import Button from "react-bootstrap/Button";

const OrderConfirmation = ({ setOrderPhase }) => {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:3030/order")
      .then(({ data }) => setOrderNumber(data.orderNumber))
      .catch((e) => {});
  }, []);

  const handleClick = () => {
    resetOrder();

    setOrderPhase("inProgress");
  };

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank you!</h1>
        <p style={{ fontSize: "25%" }}>Your order number is {orderNumber}</p>
        <p>as per our terms and condition nothing will happen now</p>
        <Button onClick={handleClick}>Create new order</Button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default OrderConfirmation;
