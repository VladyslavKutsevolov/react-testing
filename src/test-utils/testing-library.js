import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../context/orderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider });

export * from "@testing-library/react";

export { renderWithContext as render };
