import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import { ADD_TO_CART, REMOVE_FROM_CART } from "./ActionTypex";

let cart = [];

const cartReducer = (state = cart, action) => {
  if (localStorage.easeArray) {
    const storedData = JSON.parse(localStorage.getItem("easeArray"));
    state = storedData;
  }

  const product = action.payload;

  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.find((itm) => itm.id === product.id);

      if (item) {
        const addedState = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        localStorage.setItem("easeArray", JSON.stringify(addedState));
        return addedState;
      } else {
        state.push({ ...product, qty: 1 });
        localStorage.setItem("easeArray", JSON.stringify(state));
        return state;
      }
    }

    case REMOVE_FROM_CART: {
      const exist = state.find((ct) => ct.id === product.id);

      if (exist?.qty === 1) {
        const filteredData = state.filter((item) => item.id !== product.id);

        localStorage.setItem("easeArray", JSON.stringify(filteredData));
        return filteredData;
      } else {
        const addedData = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
        localStorage.setItem("easeArray", JSON.stringify(addedData));
        return addedData;
      }
    }

    default:
      break;
  }
};

const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
