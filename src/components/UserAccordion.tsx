import { Accordion, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchRepos } from "../store/githubSlice";
import RepositoryList from "./RepositoryList";

export default function UserAccordion() {
  const users = useSelector((state: RootState) => state.github.users);
  const dispatch = useDispatch<AppDispatch>();

  return users.length > 0 ? (
    <Accordion>
      {users.map((user, index) => (
        <Accordion.Item eventKey={index.toString()} key={user.login}>
          <Accordion.Header onClick={() => dispatch(fetchRepos(user.login))}>
            <Image src={user.avatar_url} alt={user.login} width="30" height="30" roundedCircle className="me-2" />
            {user.login}
          </Accordion.Header>
          <Accordion.Body>
            <RepositoryList username={user.login} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  ) : null;
}
