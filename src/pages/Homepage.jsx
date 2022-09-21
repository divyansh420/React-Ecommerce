import React from "react";
import data from "../data/product_lists.json";
import Product from "../components/Product";

function Homepage() {
  return (
    <div className=" p-12 flex flex-col gap-10 ">
      <h1>Homepage-Products</h1>
      <div className="flex gap-5 flex-wrap">
        {data.map((items) => (
          <Product items={items} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
