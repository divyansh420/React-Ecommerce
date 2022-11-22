import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product({ items }) {
  const [state, setState] = useState();
  const Navigate = useNavigate();
  function handleViewDetails() {
    Navigate(`/details/${items.productId}`);
  }
  return (
    <div
      onClick={(e) => handleViewDetails(e)}
      className="flex flex-col items-center gap-5 rounded-lg border-2 shadow-md w-96"
    >
      <img
        className=" h-72 w-60 object-contain"
        src={items.imageURL}
        alt="image"
      />
      <div className="p-10 flex flex-col gap-2">
        <span className="font-semibold">{items.name}</span>
        <span className=" font-medium text-[grey]">₹{items.price}</span>
      </div>
      <span>isFav : boolean</span>
    </div>
  );
}

export default Product;
