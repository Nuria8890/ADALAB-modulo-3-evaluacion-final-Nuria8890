// Aquí meto el código del test

import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const elements = screen.getAllByText(/learn react/i);
  expect(elements.length).toBe(1);
});
