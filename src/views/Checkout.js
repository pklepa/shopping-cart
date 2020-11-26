import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <h1>Currently in your shopping cart:</h1>

      <Link to="/shop">Back to shop</Link>
    </div>
  );
}

export default Checkout;
