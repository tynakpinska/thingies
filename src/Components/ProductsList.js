import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Card from "./Card";
import Spinner from "react-bootstrap/Spinner";

const ProductsList = ({ filteringString }) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  const chosenCategory = useSelector((state) => {
    return state.chosenCategory;
  });

  const products = useSelector((state) => {
    return state.products;
  });
  const favourites = useSelector((state) => {
    return state.favourites;
  });
  const cart = useSelector((state) => {
    return state.cart;
  });

  const location = useLocation();

  useEffect(() => {
    const filterByCategory = () => {
      let filteredByCategoryProductsList = [];
      products.forEach((product) => {
        if (product.category.name === chosenCategory)
          filteredByCategoryProductsList.push(product);
      });
      return filteredByCategoryProductsList;
    };

    if (location.pathname === "/") {
      if (chosenCategory !== "All categories")
        setProductsToDisplay(filterByCategory());
      else setProductsToDisplay(products);
    }

    if (location.pathname === "/favourites") {
      setProductsToDisplay(favourites);
    }

    if (location.pathname === "/cart") {
      setProductsToDisplay(cart);
    }

    if (filteringString) {
      let filteredByStringProductsList = products.filter((product) =>
        product.name.toLowerCase().includes(filteringString)
      );
      setProductsToDisplay(filteredByStringProductsList);
    }
  }, [
    cart,
    chosenCategory,
    favourites,
    filteringString,
    location.pathname,
    products,
  ]);

  return (
    <div className="row  justify-content-center pb-5">
      {Array.isArray(productsToDisplay) ? (
        productsToDisplay.map((product) => (
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
    </div>
  );
};

export default ProductsList;
