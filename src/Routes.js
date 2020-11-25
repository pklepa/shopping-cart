import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ShopItem from "./views/ShopItem.js";

const Routes = ({ addItemToCart }) => {
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
    </Switch>
  );
};

export default Routes;
