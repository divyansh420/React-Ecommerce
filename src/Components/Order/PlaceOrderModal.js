import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phone: "",
};

export default function PlaceOrderModal({ setIsModalVisible }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(initState);
  const { firstName, lastName, phone, address, email } = userData;

  const handleClick = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your order is placed.");

    history.push("/");
  };

  return (
    <Modal>
      <div>
        <h3>Place Your Order</h3>
        <p onClick={handleClick}>X</p>
      </div>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter your first name"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="lastName">
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter your last name"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your first name"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="phone">
          <span>Phone Number</span>
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter your first name"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="address">
          <span>Address</span>
          <input
            type="text"
            name="address"
            value={address}
            placeholder="Enter your first name"
            onChange={handleChange}
            required
          />
        </label>

        <Submit type="submit">Buy Now</Submit>
      </Form>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #00000085;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    width: 30%;
    justify-content: space-between;
    color: #fff;

    p {
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 40%;

  label {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    border: 1px solid gray;
    padding: 10px;
    border-radius: 20px;
  }

  input {
    outline: none;
    border: none;
  }
`;

const Submit = styled.button`
  border: none;
  outline: none;
  background: #db6400;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  width: fit-content;
  margin: 5px auto 0;

  &:hover {
    cursor: pointer;
  }
`;
