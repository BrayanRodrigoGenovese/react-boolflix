import { useState } from "react";
import axios from "axios";

export default function Searchbar({ setResults }) {
  const [query, setQuery] = useState("");
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    const axiosConfig = {
      params: {
        api_key: API_KEY,
        language: "it-IT",
        query: query,
      },
    };

    Promise.all([
      axios.get(`${BASE_URL}/search/movie`, axiosConfig),
      axios.get(`${BASE_URL}/search/tv`, axiosConfig),
    ])
      .then(([moviesResponse, tvShowsResponse]) => {
        setResults([
          ...moviesResponse.data.results,
          ...tvShowsResponse.data.results,
        ]);
      })
      .catch((error) => {
        console.error("Errore durante la ricerca:", error);
      });
  };

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
