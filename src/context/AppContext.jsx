import { createContext, use, useContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function AppProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [isLoadingMovies, setIstLoadingMovies] = useState();
    const [isLoadingSeries, setIstLoadingSeries] = useState();
    const [isSearching, setIsSearching] = useState(false);

    function search(query) {
        setIstLoadingMovies(true);
        setIstLoadingSeries(true);
        setIsSearching(true);

        const axiosConfig = {
            params: {
                api_key: API_KEY,
                language: "it-IT",
                query,
            },
        };

        Promise.all([
            axios.get(`${BASE_URL}/search/movie`, axiosConfig),
            axios.get(`${BASE_URL}/search/tv`, axiosConfig),
        ])
            .then(([moviesResponse, tvShowsResponse]) => {
                setMovies([...moviesResponse.data.results]);
                setSeries([...tvShowsResponse.data.results]);

                setIstLoadingMovies(false);
                setIstLoadingSeries(false);
            })
            .catch((error) => {
                console.error("Errore durante la ricerca:", error);

                setIstLoadingMovies(false);
                setIstLoadingSeries(false);
            });
    }

    const contextValue = {
        movies,
        series,
        search,
        isLoadingMovies,
        isLoadingSeries,
        isSearching,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    return useContext(AppContext);
}

export { useAppContext, AppProvider };
