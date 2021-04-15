import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<SummaryForm />);
});

describe("Summary Form", () => {
  it("should display unchecked checkbox and disabled button", function () {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmOrderBtn = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmOrderBtn).toBeDisabled();
  });

  it("should enable button once checkbox is checked", function () {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmOrderBtn = screen.getByRole("button", {
      name: /confirm order/i,
    });
    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    expect(confirmOrderBtn).toBeEnabled();
  });

  it("should popover responds to hover", async () => {
    const nullPopover = screen.queryByText(/no ice cream will be delivered/i);

    expect(nullPopover).not.toBeInTheDocument();

    const terms = screen.getByText(/terms and conditions/i);
    userEvent.hover(terms);

    const popover = screen.getByText(/no ice cream will be delivered/i);

    expect(popover).toBeInTheDocument();

    userEvent.unhover(terms);

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will be delivered/i)
    );
  });
});
