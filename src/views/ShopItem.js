import { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "../assets/catalog.json";

function ShopItem({ itemId, addItemToCart }) {
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const item = Catalog.find((i) => i.id == itemId);

  function handleClick() {
    addItemToCart({ ...item, quantity: 1 });
    setShowCheckoutBtn(true);
  }

  return (
    <div>
      <h1>You clicked on {item.name}</h1>

      <button onClick={handleClick}>Add to cart</button>

      {showCheckoutBtn && (
        <button>
          <Link to="/checkout">Proceed to checkout</Link>
        </button>
      )}

      <Link to="/shop">Go back</Link>
    </div>
  );
}

export default ShopItem;
