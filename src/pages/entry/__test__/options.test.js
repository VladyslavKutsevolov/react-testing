import { screen, render } from "@testing-library/react";

import Options from "../Options";
import { OrderDetailsProvider } from "../../../context/orderDetails";

it("should display image for each scoop", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });
  const scoopImg = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImg).toHaveLength(2);

  const altText = scoopImg.map((e) => e?.alt);

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
