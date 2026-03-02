import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { AppProvider } from "./context/AppContext";

export default function App() {
    // Idealmente avrei voluto avere la sezione MOVIES e la sezione SERIES separate in due "pagine" diverse
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
