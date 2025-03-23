import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./store/githubSlice";
import App from "./App";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const store = configureStore({ reducer: { github: githubReducer } });

const mockUsers = [{ login: "testuser", avatar_url: "https://avatar.com" }];
const mockRepos = [{ name: "repo1", description: "Test Repo", stargazers_count: 5, html_url: "#" }];

test("searches users and displays repositories on click", async () => {
  mock.onGet(/search\/users/).reply(200, { items: mockUsers });
  mock.onGet(/users\/testuser\/repos/).reply(200, mockRepos);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/Enter username/i), { target: { value: "testuser" } });
  fireEvent.click(screen.getByText(/Search/i));

  expect(await screen.findByText(/testuser/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/testuser/i));

  expect(await screen.findByText(/repo1/i)).toBeInTheDocument();
});
