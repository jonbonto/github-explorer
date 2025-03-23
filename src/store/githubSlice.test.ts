import githubReducer, { fetchUsers, fetchRepos } from "../store/githubSlice";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const store = configureStore({
  reducer: { github: githubReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

describe("GitHub Slice", () => {
  test("fetchUsers should update state with user data", async () => {
    mock.onGet(/search\/users/).reply(200, { items: [{ login: "user1" }] });

    await store.dispatch(fetchUsers("user1"));

    expect(store.getState().github.users).toEqual([{ login: "user1" }]);
  });

  test("fetchRepos should update state with repo data", async () => {
    mock.onGet(/users\/user1\/repos/).reply(200, [{ name: "repo1", description: "Test Repo", stargazers_count: 5 }]);

    await store.dispatch(fetchRepos("user1"));

    expect(store.getState().github.repos.user1).toEqual([{ name: "repo1", description: "Test Repo", stargazers_count: 5 }]);
  });

  test("handles fetchUsers.rejected and sets loading to false", async () => {
  
    mock.onGet(/search\/users/).reply(500);

    await store.dispatch(fetchUsers("testuser"));

    expect(store.getState().github.loading).toBe(false);
  });
});
