import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

interface GitHubUser {
  login: string;
  avatar_url: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

interface GitHubState {
  users: GitHubUser[];
  repos: Record<string, GitHubRepo[]>;
  loading: boolean;
}

const initialState: GitHubState = {
  users: [],
  repos: {},
  loading: false,
};

// Fetch Users
export const fetchUsers = createAsyncThunk("github/fetchUsers", async (query: string) => {
  const { data } = await axios.get(`${GITHUB_API_URL}/search/users?q=${query}&per_page=5`);
  return data.items;
});

// Fetch Repositories
export const fetchRepos = createAsyncThunk("github/fetchRepos", async (username: string) => {
  const { data } = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
  return { username, repos: data };
});

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos[action.payload.username] = action.payload.repos;
      });
  },
});

export default githubSlice.reducer;
