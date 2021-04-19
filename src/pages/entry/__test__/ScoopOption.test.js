import { render, screen } from "../../../test-utils/testing-library";
import userEvent from "@testing-library/user-event";
import ScoopOptions from "../ScoopOptions";

it.only("should turn red if scoops input is invalid", () => {
  render(<ScoopOptions name="" imagePath="" updateItemCount={jest.fn()} />);

  const vanillaInput = screen.getByRole("spinbutton");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "-1");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "2.5");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "11");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "2");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
