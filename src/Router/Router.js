import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import ShowProduct from "./../Components/Products/ShowProduct";
import Cart from "./../Pages/Cart";

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
    </Switch>
  );
}
