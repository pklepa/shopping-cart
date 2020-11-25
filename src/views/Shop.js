import { Link } from "react-router-dom";
import Catalog from "../assets/catalog.json";

function Shop() {
  const planets = Catalog;

  return (
    <div>
      <h1>Catalog</h1>
      <Link to="/">back home</Link>
      <ul>
        {planets.map((planet) => {
          return (
            <li key={planet.id} className="planet">
              <Link to={`shop/${planet.id}`}>{planet.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
