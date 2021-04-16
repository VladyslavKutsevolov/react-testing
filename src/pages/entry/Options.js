import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import Row from "react-bootstrap/Row";
import ToppingsOpt from "./ToppingsOpt";
import AlertBanner from "../AlertBanner";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../context/orderDetails";
import { formatCurrency } from "../../utils";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();
  const [orderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((e) => setError(true));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingsOpt;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const ItemOptions = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  if (error) {
    return <AlertBanner />;
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.total[optionType]}
      </p>
      <Row>{ItemOptions}</Row>
    </>
  );
};

export default Options;
