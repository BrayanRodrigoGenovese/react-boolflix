import { useAppContext } from "../context/AppContext";
import Card from "./Card";

export default function Home() {
    const { movies, series } = useAppContext();

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
