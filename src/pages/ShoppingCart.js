import React, { useEffect, useState } from "react";
import { ManageState } from "../ContextApi";
import jsonData from "../data/product_lists.json";
function ShoppingCart() {
  const { addToCart } = ManageState();
  const [data, setData] = useState();
  useEffect(() => {
    const cart = jsonData.filter((items) => items.productId == addToCart);
    setData(cart);
  }, []);
  console.log(data);
  return (
    <div>
      <h1>my Cart</h1>
    </div>
  );
}

export default ShoppingCart;
