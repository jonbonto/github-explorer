import { Accordion, Image } from "react-bootstrap";
import RepositoryListContainer from "../containers/RepositoryListContainer";

interface Props {
  users: { login: string; avatar_url: string }[];
  onFetchRepos: (username: string) => void;
}

export default function UserAccordion({ users, onFetchRepos }: Props) {
  return users.length > 0 ? (
    <Accordion>
      {users.map((user, index) => (
        <Accordion.Item eventKey={index.toString()} key={user.login}>
          <Accordion.Header onClick={() => onFetchRepos(user.login)}>
            <Image src={user.avatar_url} alt={user.login} width="30" height="30" roundedCircle className="me-2" />
            {user.login}
          </Accordion.Header>
          <Accordion.Body>
            <RepositoryListContainer username={user.login} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  ) : null;
}
