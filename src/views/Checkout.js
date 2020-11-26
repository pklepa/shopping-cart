import { Link } from "react-router-dom";

function Checkout({ shoppingCart }) {
  return (
    <div>
      {shoppingCart.length > 0 ? (
        <>
          <h1>Currently you cart has:</h1>
          <ul>
            {shoppingCart.map((item) => {
              return (
                <li>
                  {item.name}......{item.quantity}
                </li>
              );
            })}
          </ul>
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
