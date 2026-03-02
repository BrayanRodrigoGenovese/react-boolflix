import { useState } from "react";
import axios from "axios";

export default function Searchbar({ setResults }) {
  const [query, setQuery] = useState("");
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const handleSearch = (e) => {};

  return (
    <div className="Searchbar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Cerca un film o serie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
