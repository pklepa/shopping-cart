import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import {
  OuterContainer,
  Container,
  Heading,
  BagItem,
  ItemDetails,
  ControlButton,
  PlusIcon,
  MinusIcon,
  CartIcon,
} from "./styles";

function Checkout({ shoppingCart, addItemToCart, removeItemFromCart }) {
  function handleChange(e, item) {
    if (e.target.value > item.quantity) {
      addItemToCart(item);
    } else {
      removeItemFromCart(item);
    }
  }

  const images = require.context("../../assets/images/catalog", true);

  return (
    <OuterContainer
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {shoppingCart.length > 0 ? (
        <Container>
          <Heading>Your shopping bag</Heading>

          <ul>
            {shoppingCart.map((item) => {
              let img = images("./" + item.imgs[0]);

              return (
                <BagItem key={item.id}>
                  <img src={img.default} alt="Aaaaa" />
                  <ItemDetails>
                    <div className="upper-wrapper">
                      <div>
                        <h1>{item.name}</h1>
                        <span>{item.product_type}</span>
                      </div>

                      <p>$ {item.price}</p>
                    </div>

                    <div className="quantity-wrapper">
                      <ControlButton enabled={item.quantity > 1}>
                        <MinusIcon
                          onClick={() =>
                            item.quantity > 1 && removeItemFromCart(item)
                          }
                        />
                      </ControlButton>

                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                        onChange={(e) => handleChange(e, item)}
                      />

                      <ControlButton enabled={item.quantity < 99}>
                        <PlusIcon
                          onClick={() =>
                            item.quantity <= 99 && addItemToCart(item)
                          }
                        />
                      </ControlButton>
                    </div>

                    <button onClick={() => removeItemFromCart(item, "ALL")}>
                      Remove item
                    </button>
                  </ItemDetails>
                </BagItem>
              );
            })}

            <p>
              Total:{" "}
              {shoppingCart
                .reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
            </p>
          </ul>

          <div>
            <Button
              primary
              onClick={() => window.alert("Thanks for coming by!")}
            >
              Proceed to payment
            </Button>

            <Button small>
              <Link to="/shop">Back to shop</Link>
            </Button>
          </div>
        </Container>
      ) : (
        <Container>
          <Heading>Your cart is empty</Heading>
          <CartIcon />
          <Button>
            <Link to="/shop">Back to shop</Link>
          </Button>
        </Container>
      )}
    </OuterContainer>
  );
}

export default Checkout;
