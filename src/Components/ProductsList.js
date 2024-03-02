import React from "react";
import Card from "./Card";
import Spinner from "react-bootstrap/Spinner";

import { useSelector } from "react-redux";

import { useGetProductsQuery } from "../redux/shopApi";

const ProductsList = () => {
  const { isLoading, isSuccess, isError, error } = useGetProductsQuery();

  const products = useSelector((state) => {
    return state.products;
  });
  const favourites = useSelector((state) => {
    return state.favourites;
  });
  const cart = useSelector((state) => {
    return state.cart;
  });

  const chosenCategory = useSelector((state) => {
    return state.chosenCategory;
  });

  const route = useSelector((state) => {
    return state.route;
  });

  let productsList = [];

  if (isLoading) {
    productsList = (
      <Spinner
        animation="grow"
        role="status"
        style={{ marginTop: "5rem", width: "10rem", height: "10rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (isSuccess) {
    if (route === "Shop") {
      products.forEach((product) => {
        if (chosenCategory === "All categories") {
          productsList.push(product);
        } else {
          if (product.category.name === chosenCategory)
            productsList.push(product);
        }
      });
    }
  } else if (isError) {
    productsList = <p>{error}</p>;
  }

  if (route === "Favourites") productsList = favourites;
  else if (route === "Cart") productsList = cart;

  return (
    <>
      {Array.isArray(productsList)
        ? productsList.map((product) => (
            <Card product={product} key={product.id} />
          ))
        : productsList}
    </>
  );
};

export default ProductsList;
