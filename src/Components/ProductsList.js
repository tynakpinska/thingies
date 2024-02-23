import React from "react";
import Card from "./Card";

import { useSelector } from "react-redux";

import { useGetProductsQuery } from "../redux/shopApi";

const ProductsList = () => {
  const { isLoading, isSuccess, isError, error } = useGetProductsQuery();

  const products = useSelector((state) => {
    return state.products;
  });

  let productsList = [];

  if (isLoading) {
    productsList = <p>Loading...</p>;
  } else if (isSuccess) {
    products.forEach((product) => {
      if (productsList.length < 20) {
        productsList.push(<Card product={product} key={product.id} />);
      }
    });
  } else if (isError) {
    productsList = <p>{error}</p>;
  }

  return <div className="row justify-content-center">{productsList}</div>;
};

export default ProductsList;
