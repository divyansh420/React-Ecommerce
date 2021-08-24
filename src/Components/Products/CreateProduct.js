import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default function CreateProduct({ product }) {
  const history = useHistory();

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

  const handleProductClick = () => {
    history.push(`/products/${productId}`);
  };

  return (
    <ProductContainer onClick={handleProductClick}>
      <ProductImage>
        <img src={imageURL} alt={name} />
      </ProductImage>

      <section>
        <ProductName>
          {name.length > 15 ? name.slice(0, 15) + "..." : name}{" "}
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
      </section>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  border: 2px solid #d4d4d4;
  border-radius: 3px;
  font-family: Roboto, Arial, sans-serif;

  cursor: pointer;

  & > section {
    padding: 0 20px 10px;
  }
`;

const ProductImage = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const ProductName = styled.p`
  font-weight: 600;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  text-decoration: line-through;
  margin: 10px 0;

  svg {
    margin-right: 2px;
  }
`;

const ProductDiscountedPrice = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;

  p {
    margin: 0;
  }

  svg {
    margin-right: 2px;
  }
`;

const SaveMoney = styled.p`
  color: green;
  font-weight: 600;
  margin: 0;

  svg {
    font-size: 13px;
    margin-right: 1px;
  }
`;
