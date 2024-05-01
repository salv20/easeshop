import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./ActionTypes";
import axios from "axios";

const fetchRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
const fetchData = (product) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: product,
  };
};
const fetchError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

const asyncFunc = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(fetchData(res.data)))
      .catch((err) => dispatch(fetchError(err.message)));
  };
};
export default asyncFunc;
