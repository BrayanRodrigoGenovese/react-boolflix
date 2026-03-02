import { useAppContext } from "../context/AppContext";
import Card from "./Card";

export default function Home() {
    const { movies, series, isSearching, isLoadingMovies, isLoadingSeries } =
        useAppContext();

    if (!isSearching) {
        return (
            <h2 className="FeedbackMessage">
                Benvenuto su Boolflix! Cerca un film o una serie TV per
                iniziare.
            </h2>
        );
    }

    if (isLoadingMovies || isLoadingSeries) {
        return <h2 className="FeedbackMessage">Caricamento in corso... 🍿</h2>;
    }

    if (movies.length === 0 && series.length === 0) {
        return (
            <h2 className="FeedbackMessage">
                Nessun risultato trovato. Prova con un altro titolo! 😭
            </h2>
        );
    }

    return (
        <div>
            {movies.length > 0 && (
                <div className="CategorySection">
                    <h2 className="CategoryTitle">Movies</h2>
                    <div className="GridContainer">
                        {movies.map((el) => (
                            <Card key={el.id} item={el} />
                        ))}
                    </div>
                </div>
            )}

            {series.length > 0 && (
                <div className="CategorySection">
                    <h2 className="CategoryTitle">Series</h2>
                    <div className="GridContainer">
                        {series.map((el) => (
                            <Card key={el.id} item={el} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
