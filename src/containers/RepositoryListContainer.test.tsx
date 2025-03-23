import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import githubReducer, { fetchRepos } from "../store/githubSlice";
import RepositoryListContainer from "../containers/RepositoryListContainer";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const store = configureStore({ reducer: { github: githubReducer } });

mock.onGet("https://api.github.com/users/testuser/repos").reply(200, [
  { name: "repo1", description: "Test Repo", stargazers_count: 5, html_url: "#" },
]);

test("fetches repositories and renders them", async () => {
  render(
    <Provider store={store}>
      <RepositoryListContainer username="testuser" />
    </Provider>
  );

  store.dispatch(fetchRepos("testuser"));

  await waitFor(() => expect(screen.getByText(/repo1/i)).toBeInTheDocument());
});
