import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../action/types";

export const INITIAL_STATE = {
  listProduct: [],
};

const ProductReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      console.log("FETCH_USER_REQUEST", action);
      return {
        ...state,
      };

    case FETCH_PRODUCT_SUCCESS:
      console.log("FETCH_PRODUCT_SUCCESS", action);
      return {
        ...state,
        listProduct: action.dataUsers,
      };
    case FETCH_PRODUCT_ERROR:
      console.log("FETCH_PRODUCT_ERROR", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default ProductReduce;
