import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../context/orderDetails";
import Button from "react-bootstrap/Button";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.total.grandTotal}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sandae!</Button>
    </div>
  );
};

export default OrderEntry;
