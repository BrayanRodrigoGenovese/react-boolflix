export default function Card({ item }) {
  const Stars = () => {
    const vote = Math.ceil(item.vote_average / 2);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= vote) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>);
      } else {
        stars.push(<i key={i} className="fa-regular fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="Card">
      <img
        className="Poster"
        src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
        alt={item.title || item.name}
      />
      <div className="Info">
        <p>
          <strong>Titolo:</strong> {item.title || item.name}
        </p>
        <p>
          <strong>Titolo Originale:</strong>
          {item.original_title || item.original_name}
        </p>
        <p className="Rating">
          <strong>Voto:</strong>
          {Stars()}
        </p>
        <p>
          <strong>Overview:</strong>
          {item.overview || "Nessuna descrizione disponibile."}
        </p>
      </div>
    </div>
  );
}
