import { Link } from "react-router-dom";
import Catalog from "../assets/catalog.json";

function ShopItem({ itemId, addItemToCart }) {
  const item = Catalog.find((i) => i.id == itemId);

  return (
    <div>
      <h1>You clicked on {item.name}</h1>

      <button onClick={() => addItemToCart(item)}>Add to cart</button>

      <Link to="/shop">Go back</Link>
    </div>
  );
}

export default ShopItem;
