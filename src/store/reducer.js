import {
  INCREASE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  SET_ITEM_IN_CART,
  DECREASE_QUANTITY,
} from "./actionTypes";

const initState = {
  items: [],

  orderData: [],
  favItems: [],
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_ITEM_IN_CART: {
      return { ...state, items: [...state.items, payload] };
    }

    case REMOVE_ITEM_FROM_CART: {
      const arr = state.items.filter((item) => item.productId !== payload);

      return { ...state, items: arr };
    }

    case INCREASE_QUANTITY: {
      const arr = state.items.map((item) =>
        item.productId == payload
          ? { ...item, quantity: ++item.quantity }
          : item
      );

      return { ...state, items: arr };
    }

    case DECREASE_QUANTITY: {
      const arr = state.items.map((item) =>
        item.productId == payload
          ? { ...item, quantity: --item.quantity }
          : item
      );

      return { ...state, items: arr };
    }

    case "Order Placed": {
      const data = [...state.items];

      return {
        ...state,
        items: [],
        orderData: [{ data, userData: payload }],
      };
    }

    case "make fav": {
      return {
        ...state,
        favItems: [...state.favItems, payload],
      };
    }

    default:
      return state;
  }
}
