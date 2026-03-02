import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";

export default function Searchbar() {
    const { search } = useAppContext();
    const [query, setQuery] = useState("");

    function formSubmit(e) {
        e.preventDefault();
        search(query);
    }

    return (
        <div className="Searchbar">
            <form onSubmit={formSubmit}>
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
