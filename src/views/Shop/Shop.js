import { Link } from "react-router-dom";
import Catalog from "../../assets/catalog.json";

import { Container, ItemCard, Test } from "./styles";

import Img from "../../assets/images/catalog/poster_venus_front_a.jpg";

function Shop() {
  const planets = Catalog;

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/images/catalog", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Container>
      {planets.map((planet) => {
        return (
          <Link key={planet.id} to={`shop/${planet.id}`}>
            <ItemCard>
              <img src={images[planet.imgs[0]].default} alt="Item image" />
            </ItemCard>
          </Link>
        );
      })}
    </Container>
  );
}

export default Shop;
