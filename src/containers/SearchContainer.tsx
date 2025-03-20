import SearchBar from "../components/SearchBar";
import { useGitHub } from "../hooks/useGitHub";

export default function SearchContainer() {
  const { searchUsers, loading } = useGitHub();

  return <SearchBar onSearch={searchUsers} loading={loading} />;
}
