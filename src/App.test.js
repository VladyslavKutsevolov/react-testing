import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

it("should have correct initial color", function () {
  const btn = screen.getByRole("button", { name: /change to blue/i });

  expect(btn).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(btn);

  expect(btn).toHaveStyle({ backgroundColor: "blue" });
  expect(btn.textContent).toBe("Change to blue");
});

it("should button be enabled", function () {
  const btn = screen.getByRole("button", { name: /change to blue/i });
  expect(btn).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

it("should toggle button enabled/disabled", function () {
  const btn = screen.getByRole("button", { name: /change to blue/i });
  expect(btn).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(btn).toBeDisabled();

  fireEvent.click(checkBox);

  expect(btn).toBeEnabled();
});
