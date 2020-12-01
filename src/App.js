import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";

import "./assets/global-styles/reset.css";
import "./assets/global-styles/fonts.css";
import "./assets/global-styles/global.css";
import { Layout, Main } from "./styles";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItemToCart(item) {
    const itemIndex = shoppingCart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();
      newCart[itemIndex].quantity++;

      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
  }

  function removeItemFromCart(item, removeAll) {
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
  }

  return (
    <Layout>
      <HashRouter basename="/">
        <Navbar cartSize={shoppingCart.length} />
        <Main>
          <Routes
            shoppingCart={shoppingCart}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        </Main>
      </HashRouter>
    </Layout>
  );
}

export default App;
