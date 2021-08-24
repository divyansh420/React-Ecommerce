import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateProductInCart from "./CreateProductInCart";

export default function Cart() {
  const { items } = useSelector((state) => state);

  const totalCost = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  console.log({ items, totalCost });

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
        </BalanceSection>
      </Main>
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

const Main = styled.main``;

const BalanceSection = styled.section`
  position: fixed;
  right: 9%;
  margin-left: 1em;
  width: 350px;
  background-color: #fff;
  padding: 20px;
  height: fit-content;
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
