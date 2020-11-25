import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ShopItem from "./views/ShopItem.js";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/shop/:id" component={ShopItem} />
    </Switch>
  );
};

export default Routes;
