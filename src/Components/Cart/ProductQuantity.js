import React, { useState } from "react";
import styled from "styled-components";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "./../../store/actions";

function ProductQuantity({ product }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product.productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.productId));
  };

  return (
    <>
      <span>Quantity:</span>{" "}
      <span>
        <DecreaseQuantityButton
          onClick={handleDecreaseQuantity}
          quantity={product.quantity}
          disabled={product.quantity === 1}
        >
          <FontAwesomeIcon icon={faMinus} />
        </DecreaseQuantityButton>
      </span>
      {product.quantity}
      <span>
        <IncreaseQuantityButton onClick={handleIncreaseQuantity}>
          <FontAwesomeIcon icon={faPlus} />
        </IncreaseQuantityButton>
      </span>
    </>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: none;
  border: 1px solid grey;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

const IncreaseQuantityButton = styled(Button)``;

const DecreaseQuantityButton = styled(Button)``;

export default ProductQuantity;
