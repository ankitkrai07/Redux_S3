import axios from "axios";
import {
  POST_PRODUCT_SUCCESS,
  PROCUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionType";

export const postProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: PROCUCT_FAILURE, payload: err.message });
      console.log(err);
    });
};
