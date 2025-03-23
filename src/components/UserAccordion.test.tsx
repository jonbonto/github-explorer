import { render, screen, fireEvent } from "@testing-library/react";
import UserAccordion from "../components/UserAccordion";
import { vi } from "vitest";

vi.mock("../containers/RepositoryListContainer", () => ({
  default: () => <div data-testid="repository-list">Mocked RepositoryListContainer</div>,
}));

const mockUsers = [{ login: "testuser", avatar_url: "https://avatar.com" }];

test("expands user and calls fetchRepos when clicked", () => {
  const mockFetchRepos = vi.fn();

  render(<UserAccordion users={mockUsers} onFetchRepos={mockFetchRepos} />);

  expect(screen.getByText(/testuser/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/testuser/i));

  expect(mockFetchRepos).toHaveBeenCalledWith("testuser");

  expect(screen.getByTestId("repository-list")).toBeInTheDocument();
});
