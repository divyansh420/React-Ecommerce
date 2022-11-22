import React, { useEffect, useState } from "react";
import { ManageState } from "../ContextApi";
import jsonData from "../data/product_lists.json";
function ShoppingCart() {
  const { addToCart, setAddToCart } = ManageState();
  const [data, setData] = useState();
  const [fetchAgain, setFetchAgain] = useState();

  useEffect(() => {
    let cart = addToCart?.map((items) => {
      return jsonData.find((filteredId) => items === filteredId.productId);
    });
    setData(cart);
  }, [fetchAgain]);
  function handleRemoveItems(e, id) {
    setFetchAgain(!fetchAgain);
    const index = addToCart.indexOf(id);
    setData(addToCart.splice(index, 1));
  }

  return (
    <div>
      <h1>my Cart</h1>
      {data?.map((cartItems) => (
        <div
          key={cartItems?.name}
          className=" shadow-md p-20 h-10 flex items-center gap-60"
        >
          <div className="flex items-center justify-between w-[900px] ">
            <img
              className="w-52 h-20 object-contain"
              src={cartItems?.imageURL}
              alt="img"
            />
            <h1>{cartItems?.name}</h1>
            <span>{cartItems.price}</span>
          </div>
          <button
            onClick={(e) => handleRemoveItems(e, cartItems?.productId)}
            className="rounded-xl bg-red-500  text-white p-2"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
