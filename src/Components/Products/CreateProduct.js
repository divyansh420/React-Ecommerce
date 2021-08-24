import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function CreateProduct({ product }) {
  const {
    name,
    productId,
    brandName,
    category,
    companyAssured,
    rating,
    price,
    discount,
    imageURL,
    sellerName,
    isNewProduct,
  } = product;

  const productDiscountedPrice = (price * Number(discount.split("%")[0])) / 100;

  return (
    <ProductContainer>
      <ProductImage>
        <img src={imageURL} alt={name} />
      </ProductImage>

      <ProductName>
        {name.length > 11 ? name.slice(0, 11) + "..." : name}{" "}
      </ProductName>

      <ProductDiscountedPrice>
        <span>
          <FontAwesomeIcon icon={faRupeeSign} />
        </span>

        <p>{price - productDiscountedPrice}</p>
      </ProductDiscountedPrice>

      <ProductPrice>
        <span>
          <FontAwesomeIcon icon={faRupeeSign} />
        </span>
        {price}
      </ProductPrice>

      <SaveMoney>
        Save{" "}
        <span>
          <FontAwesomeIcon icon={faRupeeSign} />
        </span>
        {productDiscountedPrice}
      </SaveMoney>
    </ProductContainer>
  );
}

const ProductContainer = styled.div``;

const ProductImage = styled.div`
  width: 200px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const ProductName = styled.p`
  width: 130px;
  font-weight: 600;
  margin: 10px 20px;
`;

const ProductPrice = styled.p`
  text-decoration: line-through;
  margin-bottom: 5px;

  svg {
    margin-right: 2px;
    margin-left: 20px;
  }
`;

const ProductDiscountedPrice = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 2px;
    margin-left: 20px;
  }
`;

const SaveMoney = styled.p`
  color: green;
  font-weight: 600;
  margin: 10px 20px;

  span {
    margin: 0;
  }

  svg {
    font-size: 13px;
    margin-right: 1px;
  }
`;
