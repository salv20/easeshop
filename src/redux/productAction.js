import { ADD_TO_CART, REMOVE_FROM_CART } from "./ActionTypex";

// ADD TO CART
export const AddCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// Remove from CART
export const RemoveCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
