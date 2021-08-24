import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import ShowProduct from "./../Pages/Product";
import Cart from "./../Pages/Cart";
import Favroite from "./../Components/Favroite/Favroite";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/products/:productId">
        <ShowProduct />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/favorites">
        <Favroite />
      </Route>
    </Switch>
  );
}
