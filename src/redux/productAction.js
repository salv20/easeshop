import axios from "axios";

import {
  FETCH_DATA_ERROR,
  FETCH_DATA_RESULT,
  FETCH_DATA_REQUEST,
} from "./ActionTypex";

const loading = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchData = (products) => {
  return {
    type: FETCH_DATA_RESULT,
    payload: products,
  };
};

const fetchError = (err) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: err,
  };
};

const FetchFunc = () => {
  return (dispatch) => {
    dispatch(loading);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(fetchData(res.data)))
      .catch((err) => dispatch(fetchError(err.message)));
  };
};

export default FetchFunc;
