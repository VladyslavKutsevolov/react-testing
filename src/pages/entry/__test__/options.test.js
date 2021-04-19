import { screen, render } from "@testing-library/react";

import Options from "../Options";
import { OrderDetailsProvider } from "../../../context/orderDetails";
import OrderEntry from "../OrderEntry";
import userEvent from "@testing-library/user-event";

it("should display image for each scoop", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });
  const scoopImg = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImg).toHaveLength(2);

  const altText = scoopImg.map((e) => e?.alt);

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

it("should not update total if scoops input is invalid", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "-1");

  expect(vanillaInput).toHaveClass("is-invalid");

  const total = screen.getByText("Scoops total: $0.00");
  expect(total).toBeInTheDocument();
});
