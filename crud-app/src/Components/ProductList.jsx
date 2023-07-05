import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/productReducer/action";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return <div>{products.length > 0 && products.map((el) => {})}</div>;
};
