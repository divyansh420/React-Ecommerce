import { SET_ITEM_IN_CART } from "./actionTypes";

const initState = {
  items: [],
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_ITEM_IN_CART: {
      return { ...state, items: [...state.items, payload] };
    }

    default:
      return state;
  }
}
