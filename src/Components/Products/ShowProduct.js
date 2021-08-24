import React from "react";
import { useParams } from "react-router-dom";
import products from "./../../utils/product_lists.json";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ShowProduct() {
  const { productId } = useParams();
  const history = useHistory();

  const product = products.find((product) => product.productId === productId);

  console.log(product);

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
  } = product;

  const productDiscountedPrice = (price * Number(discount.split("%")[0])) / 100;

  async function handleAddToCart() {}

  return (
    <ProductContainer>
      <Main>
        <PrimaryImage>
          <PrimeImage src={imageURL} />
        </PrimaryImage>

        <SectionB>
          <Name>{name}</Name>

          <Ratting>{rating} &#9733;</Ratting>

          <Save>
            <p>
              Extra <span>&#8377;</span> <span>{productDiscountedPrice}</span>{" "}
              off
            </p>
          </Save>

          <Price>
            <span>&#8377;{productDiscountedPrice}</span>
            <span>&#8377;{price}</span> <span>{discount} off</span>
          </Price>

          <AddToCart onClick={handleAddToCart}>
            <span>{<FontAwesomeIcon icon={faShoppingCart} />}</span>
            ADD TO CART
          </AddToCart>
        </SectionB>
      </Main>
    </ProductContainer>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductContainer = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto, Arial, sans-serif;
  padding: 0 20px;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const SectionB = styled.section``;

const Ratting = styled.button`
  color: #fff;
  background: green;
  border: none;
  outline: none;
  border-radius: 3px;
  margin: 5px 0;

  &:hover {
    cursor: pointer;
  }
`;

const PrimeImage = styled.img`
  width: 80%;
  object-fit: contain;
`;

const PrimaryImage = styled.section`
  flex-basis: 30%;
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 30px;
  margin-bottom: 8px;
`;

const Save = styled.div`
  color: green;
  margin-top: 30px;
`;
const Price = styled.div`
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 30px;

  span:first-child {
    font-size: 30px;
    font-weight: bold;
  }

  span:nth-child(2) {
    text-decoration: line-through;
    color: grey;
    margin: 0 10px;
  }

  span:nth-child(3) {
    color: green;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  border-radius: 4px;
  width: 289px;

  span {
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const AddToCart = styled(Button)`
  margin-right: 20px;
  background: #e94560;
`;
