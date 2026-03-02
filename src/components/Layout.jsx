import { Outlet } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Layout() {
  return (
    <>
      <Searchbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
