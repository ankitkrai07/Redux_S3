import React from "react";

export const ProductCard = ({
  name,
  price,
  brand,
  image,
  category,
  color,
  gender,
}) => {
  return (
    <div>
      <img src={image} alt="Product-image" />
      <h3>{name}</h3>
      <h3>Price:{price}</h3>
      <p>Brand:{brand} </p>
      <p>Color:{color} </p>
      <p>Gender:{gender} </p>
      <p>Category:{category} </p>
    </div>
  );
};
