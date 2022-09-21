import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ManageState } from "../ContextApi";
import jsonData from "../data/product_lists.json";

function ProductDetails() {
  const [data, setData] = useState();
  const { productId } = useParams();
  const { addToCart, setAddToCart } = ManageState();
  //   console.log(productId);
  useEffect(() => {
    const searchId = jsonData?.filter((items) => items.productId == productId);
    setData(searchId);
  }, []);
  console.log(data);
  function handleAddToCart() {
    setAddToCart(data[0].productId);
  }
  console.log(addToCart);
  return (
    <div className=" p-20 flex flex-col gap-10 w-full ">
      {data?.map((items) => (
        <div className="flex gap-10 justify-center w-full">
          <div className="flex flex-col">
            <img className="h-96 w-80" src={items?.imageURL} alt="img" />
          </div>
          <div className=" flex flex-col  w-[50%] gap-5">
            <h1 className="font-semibold text-[grey]">{items?.brandName}</h1>
            <h1 className="font-bold text-lg">{items?.name}</h1>
            <div className="flex flex-col">
              <span>⭐{items.rating}</span>
              <span className="font-bold text-[grey]">
                By -{items.sellerName}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="rounded-xl  bg-[orange] h-10 w-52 text-white font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
