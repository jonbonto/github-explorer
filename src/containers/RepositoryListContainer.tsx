import { useSelector } from "react-redux";
import RepositoryList from "../components/RepositoryList";
import { RootState } from "../store/store";

interface Props {
  username: string;
}

export default function RepositoryListContainer({ username }: Props) {
  const repos = useSelector((state: RootState) => state.github.repos[username] || []); 

  return <RepositoryList repos={repos} />;
}
