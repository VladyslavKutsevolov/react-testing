import { useContext, createContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constants";
import { formatCurrency } from "../utils";

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
  const zeroCurrency = formatCurrency(0);
  const [total, setTotal] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsTotal = calcTotal("scoops", optionCount);
    const toppingTotal = calcTotal("toppings", optionCount);
    const total = scoopsTotal + toppingTotal;

    setTotal({
      scoops: formatCurrency(scoopsTotal),
      toppings: formatCurrency(toppingTotal),
      grandTotal: formatCurrency(total),
    });
  }, [optionCount]);

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptCounts = { ...optionCount };
      const option = optionCount[optionType];

      option.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptCounts);
    };

    const resetOrder = () => {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    };
    return [{ ...optionCount, total }, updateItemCount, resetOrder];
  }, [optionCount, total]);
  return <OrderDetails.Provider value={value} {...props} />;
};
