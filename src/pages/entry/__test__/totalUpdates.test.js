import { render, screen } from "../../../test-utils/testing-library";
import userEvent from "@testing-library/user-event";

import Options from "../Options";
import { OrderDetailsProvider } from "../../../context/orderDetails";

it("should update subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />);

  const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });

  expect(scoopSubtotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubtotal).toHaveTextContent("2.00");

  const chocoInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  userEvent.clear(chocoInput);
  userEvent.type(chocoInput, "2");

  expect(scoopSubtotal).toHaveTextContent("6.00");
});

it("should update subtotal when toppings change ", async () => {
  render(<Options optionType="toppings" />);

  const toppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });

  expect(toppingsSubtotal).toHaveTextContent("0.00");

  const cherryInput = await screen.findByRole("checkbox", { name: "Cherries" });

  userEvent.clear(cherryInput);
  userEvent.click(cherryInput);

  expect(toppingsSubtotal).toHaveTextContent("1.5");

  const msInput = await screen.findByRole("checkbox", { name: "M&Ms" });

  userEvent.clear(msInput);
  userEvent.click(msInput);

  expect(toppingsSubtotal).toHaveTextContent("3.00");

  userEvent.click(msInput);

  expect(toppingsSubtotal).toHaveTextContent("1.5");
});
