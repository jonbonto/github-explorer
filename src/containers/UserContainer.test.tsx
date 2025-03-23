import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MockAdapter from "axios-mock-adapter";
import githubReducer, { fetchUsers } from "../store/githubSlice";
import UserContainer from "../containers/UserContainer";
import axios from "axios";

const mock = new MockAdapter(axios);

const store = configureStore({ reducer: { github: githubReducer } });

const mockUsers = [{ login: "testuser", avatar_url: "https://avatar.com" }];

test("fetches users and updates UI", async () => {
  mock.onGet(/search\/users/).reply(200, { items: mockUsers });

  render(
    <Provider store={store}>
      <UserContainer />
    </Provider>
  );

  store.dispatch(fetchUsers("testuser"));

  expect(await screen.findByText(/testuser/i)).toBeInTheDocument();
});
