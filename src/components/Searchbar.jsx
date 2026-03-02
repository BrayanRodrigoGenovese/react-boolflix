import { useState } from "react";
import axios from "axios";

export default function Searchbar({ setResults }) {
  const [query, setQuery] = useState("");
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  return (
    <div className="Searchbar">
      <input type="text" />
      <button>Search</button>
    </div>
  );
}
