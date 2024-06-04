import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import { ADD_TO_CART, REMOVE_FROM_CART } from "./ActionTypex";
const cart = [];

const cartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART: {
      const check = state.find((ct) => ct.id === product.id);
      if (check) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
    }

    case REMOVE_FROM_CART: {
      const exist = state.find((ct) => ct.id === product.id);

      if (exist.qty === 1) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    }

    default:
      state;
      break;
  }
};
const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
