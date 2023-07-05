import React from "react";
import { ProductList } from "../Components/ProductList";
import { SiderBar } from "../Components/SiderBar";
import { styled } from "styled-components";

export const HomePage = () => {
  return (
    <DIV>
      <div className="sidebar">
        <SiderBar />
      </div>
      <div className="product-list">
        <ProductList />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  .sidebar {
  }
`;
