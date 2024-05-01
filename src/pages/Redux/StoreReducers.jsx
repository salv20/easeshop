import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./ActionTypes";
import { thunk } from "redux-thunk";

const initialState = {
  loading: true,
  product: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: "",
      };
    case FETCH_DATA_ERROR:
      return {
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      state;
  }
};

const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
