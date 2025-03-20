import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchRepos } from "../store/githubSlice";
import { RootState, AppDispatch } from "../store/store";

export const useGitHub = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, repos, loading } = useSelector((state: RootState) => state.github);

  const searchUsers = (query: string) => dispatch(fetchUsers(query));
  const getUserRepos = (username: string) => dispatch(fetchRepos(username));

  return { users, repos, loading, searchUsers, getUserRepos };
};
