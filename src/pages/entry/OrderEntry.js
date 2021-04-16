import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../context/orderDetails";

const OrderEntry = () => {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.total.grandTotal}</h2>
    </div>
  );
};

export default OrderEntry;
