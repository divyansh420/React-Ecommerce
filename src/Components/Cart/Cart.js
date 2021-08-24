import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import PlaceOrderModal from "../Order/PlaceOrderModal";
import CreateProductInCart from "./CreateProductInCart";

export default function Cart() {
  const history = useHistory();
  const { items } = useSelector((state) => state);

  const [isModalVisible, setModalVisible] = useState(false);

  const totalCost = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrderButton = () => {
    setModalVisible(true);
    // history.push("/orders");
  };

  return (
    <CartBox>
      <Nav>
        <Link to="/">Home</Link> <span>{">"}</span> <span>Cart</span>
      </Nav>

      <Main>
        <section>
          {items.length > 0 &&
            items.map((product) => (
              <CreateProductInCart key={product.productId} product={product} />
            ))}
        </section>

        <BalanceSection>
          <p>PRICE DETAILS</p>
          <hr />

          <p>
            <span>
              Price ({items.length} {items.length > 1 ? "items" : "item"})
            </span>
            <span>
              &#8377;
              {totalCost}
            </span>
          </p>
          <hr />

          <OrderButton>
            <button onClick={handlePlaceOrderButton}>Place Order</button>
          </OrderButton>
        </BalanceSection>
      </Main>

      {isModalVisible && (
        <PlaceOrderModal setIsModalVisible={setModalVisible} />
      )}
    </CartBox>
  );
}

const CartBox = styled.div`
  padding: 2rem;
`;

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: black;
  }
`;

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  padding-top: 2rem;

  & > section:first-child {
    flex-basis: 60%;
  }
`;

const BalanceSection = styled.section`
  margin-left: 1em;
  width: 350px;
  padding: 20px;
  border: 1px solid #e5e2e2;
  border-radius: 2px;

  p:first-of-type {
    color: grey;
    font-weight: bold;
    margin: 0;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 30px 0;
  }
`;

const OrderButton = styled.div`
  width: 58.9%;
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 30px;
  text-align: right;
  box-shadow: 1px -1px 6px #c3c3c3;

  button {
    margin-right: 20px;
    border: none;
    outline: none;
    background: #db6400;
    padding: 15px 40px;
    font-size: 25px;
    border-radius: 3px;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;
