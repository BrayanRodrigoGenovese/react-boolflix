export default function Card({ item }) {
  return (
    <div className="Card">
      <p>{item.title || item.name}</p>
      <p>{item.original_title || item.original_name}</p>
      <p>{item.original_language}</p>
      <p>{item.overview || "Nessuna descrizione disponibile."}</p>
    </div>
  );
}
