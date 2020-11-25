import { Link } from "react-router-dom";

function ShopItem({ match }) {
  return (
    <div>
      <h1>You clicked on {match.params.id}</h1>

      <button>Add to cart</button>

      <Link to="/shop">Go back</Link>
    </div>
  );
}

export default ShopItem;
