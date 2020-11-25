import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  return (
    <div className="page-layout">
      <Router>
        <Navbar cartSize={shoppingCart.length} />
        <Routes addItemToCart={addItemToCart} />
      </Router>
    </div>
  );
}

export default App;
