import {
  POST_PRODUCT_SUCCESS,
  PROCUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionType";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PROCUCT_FAILURE:
      return { ...state, isLoading: false, isError: true, error: payload };
    case POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    default:
      return state;
  }
};
