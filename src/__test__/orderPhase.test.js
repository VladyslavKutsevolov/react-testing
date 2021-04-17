import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

it("order phase for happy path", async () => {
  render(<App />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");

  const chocoInput = screen.getByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocoInput);
  userEvent.type(chocoInput, "1");

  const cherryTopping = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  userEvent.click(cherryTopping);

  const orderSumBtn = screen.getByRole("button", { name: /order sandae/i });

  userEvent.click(orderSumBtn);

  const summaryHeading = screen.getByRole("heading", { name: "Order Summary" });
  expect(summaryHeading).toBeInTheDocument();

  const scoopHeading = screen.getByRole("heading", { name: "Scoops: $4.00" });
  expect(scoopHeading).toBeInTheDocument();

  const toppingsHeading = screen.getByRole("heading", {
    name: "Toppings: $1.50",
  });
  expect(toppingsHeading).toBeInTheDocument();

  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("1 Chocolate")).toBeInTheDocument();
  expect(screen.getByText("Cherries")).toBeInTheDocument();

  const tcCheck = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  userEvent.click(tcCheck);

  const confirmOrder = screen.getByRole("button", { name: /confirm order/i });

  userEvent.click(confirmOrder);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const thankHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  });
  expect(thankHeader).toBeInTheDocument();

  const nonLoading = screen.queryByText("loading");
  expect(nonLoading).not.toBeInTheDocument();

  const orderNum = await screen.findByText(/order number/i);
  expect(orderNum).toBeInTheDocument();

  const newOrderBtn = screen.getByRole("button", { name: /new order/i });
  userEvent.click(newOrderBtn);

  const scoopsTotal = screen.getByText("Scoops total: $0.00");
  expect(scoopsTotal).toBeInTheDocument();

  const toppingsTotal = screen.getByText("Toppings total: $0.00");
  expect(toppingsTotal).toBeInTheDocument();

  await screen.findByRole("spinbutton", { name: "Vanilla" });
  await screen.findByRole("checkbox", { name: "Cherries" });
});

it("should not display toppings if user does not add them", async () => {
  render(<App />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");

  const orderBtn = screen.getByRole("button", { name: /order sandae/i });

  userEvent.click(orderBtn);

  const summaryheading = screen.getByRole("heading", { name: "Order Summary" });
  expect(summaryheading).toBeInTheDocument();

  const scoopHeading = screen.getByRole("heading", { name: "Scoops: $2.00" });
  expect(scoopHeading).toBeInTheDocument();

  const toppingHeading = screen.queryByRole("heading", {
    name: "Toppings: $0.00",
  });
  expect(toppingHeading).not.toBeInTheDocument();
});
