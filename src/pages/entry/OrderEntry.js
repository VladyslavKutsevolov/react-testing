import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../context/orderDetails";
import Button from "react-bootstrap/Button";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();
  const hasScoop = orderDetails.scoops.size > 0;
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.total.grandTotal}</h2>
      <Button
        onClick={() => setOrderPhase("review")}
        disabled={!hasScoop}
      >
        Order Sandae!
      </Button>
    </div>
  );
};

export default OrderEntry;
