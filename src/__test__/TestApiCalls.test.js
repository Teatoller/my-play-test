import { render, screen, waitFor } from "@testing-library/react";
import TestingApiCalls from "../components/testingApiCall/TestingApiCalls";
import * as services from "../utils/service";

test("Fetch Data API called", async () => {
  const mockFetchData = jest
    .spyOn(services, "FetchData")
    .mockImplementation(async () => {
      return [
        {
          name: "Serenade-10",
        },
      ];
    });

  render(<TestingApiCalls />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/Serenade-10/i)).toBeInTheDocument();
  });
});
