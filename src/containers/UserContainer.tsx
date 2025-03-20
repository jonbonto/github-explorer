import UserAccordion from "../components/UserAccordion";
import { useGitHub } from "../hooks/useGitHub";

export default function UserContainer() {
  const { users, getUserRepos } = useGitHub();
  
  return <UserAccordion users={users} onFetchRepos={getUserRepos} />;
}
