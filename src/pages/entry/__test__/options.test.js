import { screen, render } from "@testing-library/react";

import Options from "../Options";

it("should display image for each scoop", async () => {
  render(<Options optionType="scoops" />);
  const scoopImg = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImg).toHaveLength(2);

  const altText = scoopImg.map((e) => e?.alt);

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
