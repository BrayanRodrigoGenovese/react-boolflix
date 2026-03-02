import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { AppProvider } from "./context/AppContext";
import Searchbar from "./components/Searchbar";

export default function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Layout}>
                        <Route index Component={Home} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}
