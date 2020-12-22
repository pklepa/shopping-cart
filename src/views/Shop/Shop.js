import { Link } from "react-router-dom";
import Catalog from "../../assets/catalog.json";

import {
  OuterContainer,
  Container,
  CollectionTitle,
  ItemsContainer,
  ItemCard,
} from "./styles";

function Shop() {
  const planets = Catalog;

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/images/catalog", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <OuterContainer
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container>
        <CollectionTitle>Collection || Planets</CollectionTitle>

        <ItemsContainer>
          {planets.map((planet) => {
            return (
              <Link key={planet.id} to={`shop/${planet.id}`}>
                <ItemCard>
                  {/* <img src={images[planet.imgs[0]].default} alt="" /> */}
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(${images[planet.imgs[0]].default})`,
                    }}
                  ></div>
                  <h1>{planet.name}</h1>
                  <span>{planet.product_type}</span>
                  <p>$ {planet.price}</p>
                </ItemCard>
              </Link>
            );
          })}
        </ItemsContainer>
      </Container>
    </OuterContainer>
  );
}

export default Shop;
