import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./../../utils/product_lists.json";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItemInCart } from "./../../store/actions";

export default function ShowProduct() {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

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

  function handleAddToCart(e) {
    e.preventDefault();

    let price = product.discount ? productDiscountedPrice : product.price;

    const payload = {
      ...product,
      quantity: 1,
      price,
    };

    dispatch(addItemInCart(payload));
    history.push("/cart");
  }

  return (
    <ProductContainer>
      <nav>
        <Link to="/">Home</Link> <span>{">"}</span> <Link to="/">Products</Link>{" "}
        <span>{">"}</span> <span>{name}</span>
      </nav>

      <Main>
        <PrimaryImage>
          <PrimeImage src={imageURL} />
        </PrimaryImage>

        <SectionB>
          <Name>{name}</Name>

          <Box>
            <Ratting>{rating} &#9733;</Ratting>
            {companyAssured && <Assured>Assured</Assured>}

            {isNewProduct && <NewProduct>New</NewProduct>}
          </Box>

          <Save>
            <p>
              Extra <span>&#8377;</span> <span>{productDiscountedPrice}</span>{" "}
              off
            </p>
          </Save>

          <Price>
            <span>&#8377;{discount ? productDiscountedPrice : price}</span>
            {discount && (
              <>
                <span>&#8377;{price}</span> <span>{discount} off</span>
              </>
            )}
          </Price>

          <AddToCart onClick={handleAddToCart}>
            <span>{<FontAwesomeIcon icon={faShoppingCart} />}</span>
            ADD TO CART
          </AddToCart>

          <Specifications>
            <h3>Specifications</h3>

            <ul>
              <li>
                <span>Brand</span> <span>{brandName}</span>
              </li>

              <li>
                <span>Seller</span> <span>{sellerName}</span>
              </li>
            </ul>
          </Specifications>
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

  nav {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const SectionB = styled.section`
  flex-basis: 55%;
`;

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

const Assured = styled(Ratting)`
  margin-left: 3rem;
`;

const NewProduct = styled(Assured)``;

const PrimeImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const PrimaryImage = styled.section`
  flex-basis: 40%;
  margin-top: 20px;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
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

const Box = styled.div``;

const Specifications = styled.div`
  margin-top: 4rem;
  h3 {
    color: #353535;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    width: 50%;
    margin: 10px 0;
  }
`;
