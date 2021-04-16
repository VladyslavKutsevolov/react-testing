import { useContext, createContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

export const useOrderDetails = () => {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error("Must be with in provider");
  }

  return context;
};

const calcTotal = (optionType, optionCounts) => {
  let optCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optCount += count;
  }

  return optCount * pricePerItem[optionType];
};

export const OrderDetailsProvider = (props) => {
  const [optionCount, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });
  const [total, setTotal] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const scoopsTotal = calcTotal("scoops", optionCount);
    const toppingTotal = calcTotal("toppings", optionCount);
    const total = scoopsTotal + toppingTotal;

    setTotal({
      scoops: scoopsTotal,
      toppings: toppingTotal,
      grandTotal: total,
    });
  }, [optionCount]);

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptCounts = { ...optionCount };
      const option = optionCount[optionType];

      option.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptCounts);
    };
    return [{ ...optionCount, total }, updateItemCount];
  }, [optionCount, total]);
  return <OrderDetails.Provider value={value} {...props} />;
};
