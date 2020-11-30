import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home.js";
import Shop from "./views/Shop/Shop.js";
import ShopItem from "./views/ShopItem/ShopItem.js";
import Checkout from "./views/Checkout/Checkout.js";
import ErrorPage from "./views/ErrorPage/ErrorPage.js";

import { AnimatePresence, motion } from "framer-motion";

const Routes = ({ shoppingCart, addItemToCart, removeItemFromCart }) => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/shop/:id"
          render={(routeProps) => (
            <ShopItem
              itemId={routeProps.match.params.id}
              addItemToCart={addItemToCart}
            />
          )}
        />
        <Route
          exact
          path="/checkout"
          render={() => (
            <Checkout
              shoppingCart={shoppingCart}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            />
          )}
        />
        ;
        <Route path="/" component={ErrorPage} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
