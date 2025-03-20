import { useState } from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchUsers } from "../store/githubSlice";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.github.loading);

  const handleSearch = () => {
    if (query) dispatch(fetchUsers(query));
  };

  return (
    <Card className="p-3 mb-4">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter username" value={query} onChange={(e) => setQuery(e.target.value)} />
        </Form.Group>
        <Button className="mt-2 w-100" variant="primary" onClick={handleSearch} disabled={loading}>
          {loading ? <Spinner size="sm" animation="border" /> : "Search"}
        </Button>
      </Form>
    </Card>
  );
}
