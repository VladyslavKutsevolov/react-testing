import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Options from "../Options";
import { OrderDetailsProvider } from "../../../context/orderDetails";

it("should update subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

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

  expect(scoopSubtotal).toHaveTextContent("6w.00");
});
