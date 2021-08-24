import React from "react";
import { useSelector } from "react-redux";
import products from "./../../utils/product_lists.json";

export default function Favroite() {
  const { favItems } = useSelector();

  return (
    <div>
      {favItems.length > 0 &&
        favItems.map((item) => (
          <div key={item}>
            {products.find((prod) => prod.productId == item)}
          </div>
        ))}
    </div>
  );
}
