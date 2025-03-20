import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import UserAccordion from "./components/UserAccordion";

export default function App() {
  return (
    <Container className="p-4">
      <SearchBar />
      <UserAccordion />
    </Container>
  );
}
