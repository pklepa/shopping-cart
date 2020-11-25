import { Link } from "react-router-dom";

function Shop() {
  const planets = [
    { name: "Mercury" },
    { name: "Venus" },
    { name: "Earth" },
    { name: "Mars" },
    { name: "Jupiter" },
    { name: "Saturn" },
    { name: "Uranus" },
    { name: "Neptumn" },
  ];

  return (
    <div>
      <h1>Catalog</h1>
      <Link to="/">back home</Link>
      <ul>
        {planets.map((planet) => {
          return (
            <li className="planet">
              <Link to={`shop/${planet.name}`}>{planet.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
