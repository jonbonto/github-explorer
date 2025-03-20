import RepositoryList from "../components/RepositoryList";
import { useGitHub } from "../hooks/useGitHub";

interface Props {
  username: string;
}

export default function RepositoryListContainer({ username }: Props) {
  const { repos } = useGitHub();

  return <RepositoryList repos={repos[username]} />;
}
