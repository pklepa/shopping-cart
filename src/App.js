import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) => {
    const itemIndex = shoppingCart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();
      newCart[itemIndex].quantity++;

      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
  };

  const removeItemFromCart = (item, removeAll) => {
    const itemIndex = shoppingCart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();

      removeAll ? newCart.splice(itemIndex, 1) : newCart[itemIndex].quantity--;

      setShoppingCart(newCart);
    } else {
      console.error(
        "Couldn't remove item from shopping cart: There's no such item in the shopping cart."
      );
    }
  };

  // useEffect(() => {
  // console.table(shoppingCart);
  // }, [shoppingCart]);

  return (
    <div className="page-layout">
      <Router>
        <Navbar cartSize={shoppingCart.length} />
        <Routes
          shoppingCart={shoppingCart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      </Router>
    </div>
  );
}

export default App;
