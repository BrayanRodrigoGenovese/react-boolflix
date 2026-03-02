export default function Card({ item }) {
  return (
    <div className="Card">
      <img
        className="Poster"
        src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
        alt={item.title || item.name}
      />
      <div className="Info">
        <p>{item.title || item.name}</p>
        <p>{item.original_title || item.original_name}</p>
        <p>{item.original_language}</p>
        <p>{item.overview || "Nessuna descrizione disponibile."}</p>
      </div>
    </div>
  );
}
