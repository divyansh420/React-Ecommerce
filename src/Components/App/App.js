import React from "react";
import Router from "./../../Router/Router";
import { Provider } from "react-redux";
import store from "../../store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
