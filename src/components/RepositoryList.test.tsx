import { render, screen } from "@testing-library/react";
import RepositoryList from "../components/RepositoryList";
import { Repo } from "../types";

const mockRepos: Repo[] = [
  { name: "repo1", description: "Test repository", stargazers_count: 10, html_url: "https://github.com/user/repo1" },
  { name: "repo2", html_url: "https://github.com/user/repo1" },
];

test("renders repository list correctly", () => {
  render(<RepositoryList repos={mockRepos} />);

  expect(screen.getByText(/repo1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test repository/i)).toBeInTheDocument();
  expect(screen.getByText(/10/i)).toBeInTheDocument();
  expect(screen.getByText(/No description available/i)).toBeInTheDocument();
});

test("shows 'No repositories found' when repos is empty", () => {
  render(<RepositoryList repos={[]} />);
  expect(screen.getByText(/No repositories found/i)).toBeInTheDocument();
});

test("shows spinner when repos is undefined", () => {
  render(<RepositoryList repos={undefined} />);
  expect(screen.getByRole("status")).toBeInTheDocument();
});
