import { render, screen, fireEvent } from "@testing-library/react";
import SearchContainer from "../containers/SearchContainer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "../store/githubSlice";

const store = configureStore({ reducer: { github: githubReducer } });

test("SearchContainer calls searchUsers on search", () => {
  render(
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/Enter username/i), { target: { value: "testuser" } });
  fireEvent.click(screen.getByText(/Search/i));

  expect(store.getState().github.loading).toBe(true);
});
