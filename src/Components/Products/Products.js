import React from "react";
import styled from "styled-components";
import products from "./../../utils/product_lists.json";
import CreateProduct from "./CreateProduct";

export default function Products() {
  console.log(products);

  return (
    <ProductsBox>
      {products.map((product) => (
        <CreateProduct key={product.name} product={product} />
      ))}
    </ProductsBox>
  );
}

const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 2rem;
`;
