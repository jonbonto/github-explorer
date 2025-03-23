import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("calls onSearch when clicking search", () => {
  const mockOnSearch = vi.fn();
  render(<SearchBar onSearch={mockOnSearch} loading={false} />);

  fireEvent.change(screen.getByPlaceholderText(/Enter username/i), { target: { value: "testuser" } });
  fireEvent.click(screen.getByText(/Search/i));

  expect(mockOnSearch).toHaveBeenCalledWith("testuser");
});
