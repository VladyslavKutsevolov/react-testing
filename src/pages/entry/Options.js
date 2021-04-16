import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import Row from "react-bootstrap/Row";
import ToppingsOpt from "./ToppingsOpt";
import AlertBanner from "../AlertBanner";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((e) => setError(true));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingsOpt;
  const ItemOptions = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  if (error) {
    return <AlertBanner />;
  }

  return <Row>{ItemOptions}</Row>;
};

export default Options;
