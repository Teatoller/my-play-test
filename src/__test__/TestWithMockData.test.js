import { render, screen } from "@testing-library/react";
import TestWithMockData from "../components/testWithMockData/TestWithMockData";

const mockData = [
  {
    id: 1,
    first_name: "Fletcher",
    last_name: "McVanamy",
    email: "mmcvanamy0@e-recht24.de",
    age: 30,
  },
  {
    id: 2,
    first_name: "Clarice",
    last_name: "Harrild",
    email: "charrild1@dion.ne.jp",
    age: 35,
  },

];

test("List renders succesfully", () => {
  render(<TestWithMockData data={mockData} />);

  const element = screen.getByText(/Fletcher/i);

  expect(element).toBeInTheDocument();
});

