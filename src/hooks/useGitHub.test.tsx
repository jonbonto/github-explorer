import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "../store/githubSlice";
import { useGitHub } from "./useGitHub";

const store = configureStore({ reducer: { github: githubReducer } });

const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

test("useGitHub should call searchUsers", () => {
  const { result } = renderHook(() => useGitHub(), { wrapper });

  act(() => {
    result.current.searchUsers("testuser");
  });

  expect(store.getState().github.loading).toBe(true);
});
