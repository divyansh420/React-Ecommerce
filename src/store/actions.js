import {
  SET_ITEM_IN_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";

export const addItemInCart = (payload) => {
  return { type: SET_ITEM_IN_CART, payload };
};

export const removeItemFromCart = (payload) => {
  return { type: REMOVE_ITEM_FROM_CART, payload };
};

export const increaseQuantity = (payload) => {
  return { type: INCREASE_QUANTITY, payload };
};

export const decreaseQuantity = (payload) => {
  return { type: DECREASE_QUANTITY, payload };
};
