import { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "../../assets/catalog.json";

import img from "../../assets/images/catalog/poster_mars_front_a.jpg";

import { OuterContainer, Container, MainImage, ItemDetails } from "./styles";
import { Button } from "../../components/Button/Button.js";

function ShopItem({ itemId, addItemToCart }) {
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const item = Catalog.find((i) => i.id == itemId);

  function handleClick() {
    addItemToCart({ ...item, quantity: 1 });
    setShowCheckoutBtn(true);
  }

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
        <MainImage src={images[item.imgs[0]].default} alt="" />

        <ItemDetails>
          <h1>{item.name}</h1>
          <span>{item.product_type}</span>

          <p>
            <strong>About the image: </strong>
            {item.description ||
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero."}
          </p>

          <div className="buttons-wrapper">
            <Button primary onClick={handleClick}>
              Add to cart
            </Button>

            <div>
              {showCheckoutBtn && (
                <Button primary small>
                  <Link to="/checkout">Proceed to checkout</Link>
                </Button>
              )}

              <Button small>
                <Link to="/shop">Go back</Link>
              </Button>
            </div>
          </div>
        </ItemDetails>
      </Container>
    </OuterContainer>
  );
}

export default ShopItem;
