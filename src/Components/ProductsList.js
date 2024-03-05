import React, { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "react-bootstrap/Spinner";

import { useSelector } from "react-redux";

const ProductsList = ({ filteringString }) => {
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

  const [productsList, setProductsList] = useState("");

  useEffect(() => {
    setProductsList(products);
    if (route === "Favourites") setProductsList(favourites);
    else if (route === "Cart") setProductsList(cart);
    else {
      if (filteringString !== "") {
        let filteredByStringProductsList = productsList.filter((product) =>
          product.name.toLowerCase().includes(filteringString)
        );
        setProductsList(filteredByStringProductsList);
      }
      if (chosenCategory !== "All categories") {
        let filteredByCategoryProductsList = [];
        products.forEach((product) => {
          if (product.category.name === chosenCategory)
            filteredByCategoryProductsList.push(product);
        });
        setProductsList(filteredByCategoryProductsList);
      }
    }
  }, [
    route,
    favourites,
    cart,
    chosenCategory,
    filteringString,
    products,
    productsList,
  ]);

  return (
    <>
      {Array.isArray(productsList) ? (
        productsList.map((product) => (
          <Card product={product} key={product.id} />
        ))
      ) : (
        <Spinner
          animation="grow"
          role="status"
          style={{ marginTop: "5rem", width: "10rem", height: "10rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default ProductsList;
