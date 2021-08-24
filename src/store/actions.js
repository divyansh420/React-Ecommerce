import { SET_ITEM_IN_CART } from "./actionTypes";

export const addItemInCart = (payload) => {
  return { type: SET_ITEM_IN_CART, payload };
};
