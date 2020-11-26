import { Link } from "react-router-dom";

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
    <div>
      {shoppingCart.length > 0 ? (
        <>
          <h1>Currently you cart has:</h1>
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

          <button
            onClick={() =>
              window.alert(
                "Watch out! This is not a real shopping site, man..."
              )
            }
          >
            Proceed to payment
          </button>
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}
      {console.table(shoppingCart)}

      <Link to="/shop">Back to shop</Link>
    </div>
  );
}

export default Checkout;
