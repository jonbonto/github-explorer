import { ListGroup, Spinner } from "react-bootstrap";

interface Repo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

interface Props {
  repos?: Repo[]; // Optional because it may be undefined initially
}

export default function RepositoryList({ repos }: Props) {
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
