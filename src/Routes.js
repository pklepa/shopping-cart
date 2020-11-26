import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ShopItem from "./views/ShopItem.js";
import Checkout from "./views/Checkout";
import ErrorPage from "./views/ErrorPage";

const Routes = ({ shoppingCart, addItemToCart }) => {
  return (
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
        render={() => <Checkout shoppingCart={shoppingCart} />}
      />
      ;
      <Route path="/" component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
