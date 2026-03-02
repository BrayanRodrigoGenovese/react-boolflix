import { useOutletContext } from "react-router-dom";
import Card from "./card";

export default function Home() {
  const { results } = useOutletContext();

  return (
    <div className="GridContainer">
      {results.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
