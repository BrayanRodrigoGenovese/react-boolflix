import { useAppContext } from "../context/AppContext";
import Card from "./Card";

export default function Home() {
    const { movies, series } = useAppContext();

    return (
        <>
            <div className="GridContainer">
                <h2>Movies</h2>
                {movies.map((el) => (
                    <Card key={el.id} item={el} />
                ))}
            </div>

            <div className="GridContainer">
                <h2>Series</h2>
                {series.map((el) => (
                    <Card key={el.id} item={el} />
                ))}
            </div>
        </>
    );
}
