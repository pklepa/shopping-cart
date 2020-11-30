import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { OuterContainer, Container, Heading } from "./styles";

function Checkout({ shoppingCart, addItemToCart, removeItemFromCart }) {
  function handleChange(e, item) {
    console.log(e.target.value, item.quantity);
    if (e.target.value > item.quantity) {
      addItemToCart(item);
    } else {
      removeItemFromCart(item);
    }
  }

  return (
    <OuterContainer>
      {shoppingCart.length > 0 ? (
        <Container>
          <Heading>Your shopping bag</Heading>

          <ul>
            {shoppingCart.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}......{" "}
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, item)}
                  />
                  ......$ {(item.quantity * item.price).toFixed(2)}......{" "}
                  <button onClick={() => removeItemFromCart(item, true)}>
                    Remove item
                  </button>
                </li>
              );
            })}
          </ul>

          <Button
            onClick={() =>
              window.alert(
                "Watch out! This is not a real shopping site, man..."
              )
            }
          >
            Proceed to payment
          </Button>

          <Button>
            <Link to="/shop">Back to shop</Link>
          </Button>
        </Container>
      ) : (
        <Container>
          <h1>Your cart is empty</h1>
          <Button>
            <Link to="/shop">Back to shop</Link>
          </Button>
        </Container>
      )}
    </OuterContainer>
  );
}

export default Checkout;
