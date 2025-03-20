import { useState } from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <Card className="p-3 mb-4">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter username" value={query} onChange={(e) => setQuery(e.target.value)} />
        </Form.Group>
        <Button className="mt-2 w-100" variant="primary" onClick={() => onSearch(query)} disabled={loading}>
          {loading ? <Spinner size="sm" animation="border" /> : "Search"}
        </Button>
      </Form>
    </Card>
  );
}
