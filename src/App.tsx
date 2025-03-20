import { Container } from "react-bootstrap";
import SearchContainer from "./containers/SearchContainer";
import UserContainer from "./containers/UserContainer";

export default function App() {
  return (
    <Container className="p-4">
      <SearchContainer />
      <UserContainer />
    </Container>
  );
}
