import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductQuantity from "./ProductQuantity";

function CreateProductInCart({ product }) {
  const dispatch = useDispatch();
  const {
    name,
    brandName,
    category,
    companyAssured,
    rating,
    price,
    discount,
    imageURL,
    sellerName,
    isNewProduct,
    quantity,
  } = product;

  // const convertPrice = (price: string) => {
  //   return Math.ceil(Number(price) * 75);
  // };

  const handleRemoveClick = async () => {};

  return (
    <ProductCart>
      <div>
        <ProductImg src={imageURL} />
      </div>

      <ProductDetails>
        <div>
          <p>{name}</p>
          <p>
            <span>&#8377;{price}</span>
          </p>
        </div>

        <p>
          <ProductQuantity product={product} />
        </p>

        <Remove onClick={handleRemoveClick}>Remove</Remove>
      </ProductDetails>
    </ProductCart>
  );
}

const ProductCart = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3em 0;

  &:first-of-type {
    margin: 20px 0;
  }

  &:nth-last-child(2) {
    margin-bottom: 5em;
  }
`;

const ProductImg = styled.img`
  border-radius: 3px;
`;

const ProductDetails = styled.div`
  width: 100%;
  margin: 0 20px;
  padding-left: 30px;

  p:first-child {
    margin: 3px 0 10px 0;
  }

  p:nth-child(2) {
    font-size: 16px;
    color: gray;
    span:first-child {
      margin-right: 2em;
    }
  }

  p:nth-child(3) {
    margin: 10px 0;
  }

  & > div {
    display: flex;
    font-size: 23px;
    justify-content: space-between;
    align-items: center;

    p:nth-child(2) {
      color: black;
      font-size: 23px;
    }
  }

  span {
    display: inline-block;
  }
`;

const Remove = styled.button`
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px 20px 5px 0;
  margin-top: 3em;
  background: none;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export default CreateProductInCart;
