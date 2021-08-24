import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBox>
      <Nav>
        <section className="left">
          <NavLink to="/">Logo</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/fav">Favorites</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
        </section>
        <section className="left">
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/cart">cart</NavLink>
        </section>
      </Nav>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > section {
    display: flex;
    width: fit-content;
  }

  .left,
  .right {
    a {
      color: black;
      text-decoration: none;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;
