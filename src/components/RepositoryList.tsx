import { ListGroup, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface Props {
  username: string;
}

export default function RepositoryList({ username }: Props) {
  const repos = useSelector((state: RootState) => state.github.repos[username]);

  if (!repos) return <Spinner animation="border" size="sm" />;

  return (
    <ListGroup variant="flush">
      {repos.map((repo) => (
        <ListGroup.Item key={repo.name} className="d-flex justify-content-between align-items-center">
          <div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="fw-bold">
              {repo.name}
            </a>
            <div className="text-muted small">{repo.description || "No description available"}</div>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-1">{repo.stargazers_count}</span>⭐
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
