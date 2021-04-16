import React from "react";
import { useOrderDetails } from "../../context/orderDetails";
import SummaryForm from "./SummaryForm";

const OrderSummary = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();
  const scoopArr = Array.from(orderDetails.scoops.entries());
  const scoopList = scoopArr.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArr = Array.from(orderDetails.toppings.keys());
  const toppingList = toppingArr.map((key) => <li key={key}>{key}</li>);
  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {orderDetails.total.scoops}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {orderDetails.total.toppings}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
};

export default OrderSummary;
