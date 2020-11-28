import { Link } from "react-router-dom";
import Catalog from "../../assets/catalog.json";

import {
  OuterContainer,
  Container,
  CollectionTitle,
  Divider,
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
    <OuterContainer>
      <Container>
        <CollectionTitle>Collection || Planets</CollectionTitle>

        <ItemsContainer>
          {planets.map((planet) => {
            return (
              <Link key={planet.id} to={`shop/${planet.id}`}>
                <ItemCard>
                  <img src={images[planet.imgs[0]].default} alt="" />
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
