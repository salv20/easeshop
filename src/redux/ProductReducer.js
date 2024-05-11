import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_RESULT,
  FETCH_DATA_ERROR,
} from "./ActionTypex";

const initialState = {
  loading: true,
  product: [],
  error: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_RESULT:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: "",
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      state;
  }
};

const store = createStore(
  ProductReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
