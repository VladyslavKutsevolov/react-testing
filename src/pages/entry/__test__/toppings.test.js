import { render, screen } from "../../../test-utils/testing-library";
import Options from "../Options";
it("should display image for each topping", async () => {
  render(<Options optionType="toppings" />);

  const toppingImg = await screen.findAllByRole("img", { name: /topping/i });

  expect(toppingImg).toHaveLength(3);

  const altTextName = toppingImg.map((img) => img?.alt);

  expect(altTextName).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
