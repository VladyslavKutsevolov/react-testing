import { render, screen } from "../../../test-utils/testing-library";

import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderConfirmation from "../OrderConfirmation";
import { waitFor } from "@testing-library/dom";

it("should display error if request fails", async () => {
  server.resetHandlers([
    rest.get("http://localhost:3030/order", (req, res, ctx) => {
      res(ctx.status(500));
    }),
  ]);

  render(<OrderConfirmation setOrderPhase={jest.fn()} />);

  await waitFor(async () => {
    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("An expected error");
  });
});
