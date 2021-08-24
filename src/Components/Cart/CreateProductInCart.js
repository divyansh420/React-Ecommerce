import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductQuantity from "./ProductQuantity";
import { removeItemFromCart } from "./../../store/actions";

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
    productId,
  } = product;

  const handleRemoveClick = () => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <ProductCart>
      <ImgBox>
        <ProductImg src={imageURL} />
      </ImgBox>

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
  margin-bottom: 2rem;
`;

const ImgBox = styled.div`
  width: 200px;
  height: 200px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  width: fit-content;
  margin-left: 30px;

  p:first-child {
    margin: 0;
  }

  p:nth-child(2) {
    margin: 5px 0;
    color: gray;

    span:first-child {
      margin-right: 2em;
    }
  }

  & > div {
    font-size: 18px;

    p:nth-child(2) {
      color: black;
      font-size: 20px;
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
  margin-top: 1em;
  background: none;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export default CreateProductInCart;
