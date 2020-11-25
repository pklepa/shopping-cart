import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
  );
};

export default Routes;
