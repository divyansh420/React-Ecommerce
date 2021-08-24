import React, { useState } from "react";
import styled from "styled-components";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

function ProductQuantity({ product }) {
  const dispatch = useDispatch();

  const [changeColor, setChangeColor] = useState("");

  const handleIncreaseQuantity = async () => {};

  const handleDecreaseQuantity = async () => {};

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
