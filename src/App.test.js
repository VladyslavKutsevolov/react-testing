// import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
//
// beforeEach(() => {
//   render(<App />);
// });

it("should ", function () {});

// it("should have correct initial color", function () {
//   const btn = screen.getByRole("button", { name: /change to blue/i });
//
//   expect(btn).toHaveStyle({ backgroundColor: "red" });
//
//   fireEvent.click(btn);
//
//   expect(btn).toHaveStyle({ backgroundColor: "blue" });
//   expect(btn.textContent).toBe("Change to blue");
// });
//
// it("should button be enabled", function () {
//   const btn = screen.getByRole("button", { name: /change to blue/i });
//   expect(btn).toBeEnabled();
//
//   const checkBox = screen.getByRole("checkbox");
//   expect(checkBox).not.toBeChecked();
// });
//
// it("should toggle button enabled/disabled", function () {
//   const btn = screen.getByRole("button", { name: /change to blue/i });
//   expect(btn).toBeEnabled();
//
//   const checkBox = screen.getByRole("checkbox", { name: "disabled button" });
//   expect(checkBox).not.toBeChecked();
//
//   fireEvent.click(checkBox);
//
//   expect(btn).toBeDisabled();
//
//   expect(btn).toHaveStyle({ backgroundColor: "grey" });
//
//   fireEvent.click(checkBox);
//
//   expect(btn).toBeEnabled();
// });
//
// it("should change btn color to grey when disabled", function () {
//   const btn = screen.getByRole("button", { name: /change to blue/i });
//   const checkbox = screen.getByRole("checkbox", { name: "disabled button" });
//
//   fireEvent.click(checkbox);
//   expect(btn).toHaveStyle({ backgroundColor: "grey" });
//
//   fireEvent.click(checkbox);
//   expect(btn).toHaveStyle({ backgroundColor: "red" });
// });
//
// describe("spaces before cames case", () => {
//   it("should works for no inner capital letters", function () {
//     expect(replaceCamelCase("Red")).toBe("Red");
//   });
//
//   it("should works for one inner capital letters", function () {
//     expect(replaceCamelCase("MidnightBlue")).toBe("Midnight Blue");
//   });
//
//   it("should works for multiple inner capital letters", function () {
//     expect(replaceCamelCase("MediumVioletRed")).toBe("Medium Violet Red");
//   });
// });
