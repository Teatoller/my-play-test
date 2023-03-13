import { render, screen } from "@testing-library/react";
import { FirstTest } from "../components/firstTest/FirstTest";

test("Example 1 renders succesfully", () => {
  render(<FirstTest />);

  const element = screen.getByText(/first test/i);

  expect(element).toBeInTheDocument();
});
