import { useState } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Layout() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Searchbar setResults={setResults} />
      <main className="GridLayout">
        <Outlet context={{ results }} />
      </main>
    </>
  );
}
