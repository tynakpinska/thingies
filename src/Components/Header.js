import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import styles from "./Header.module.css";
import { filledHeart, basket } from "../icons";

import { setRoute } from "../redux/stateSlices/routeSlice";
import { useGetCategoriesQuery } from "../redux/shopApi";
import { setCategory } from "../redux/stateSlices/chosenCategorySlice";

const Header = () => {
  const { isLoading, isSuccess, isError, error } = useGetCategoriesQuery();

  const categories = useSelector((state) => {
    return state.categories;
  });

  const cart = useSelector((state) => {
    return state.cart;
  });

  const favourites = useSelector((state) => {
    return state.favourites;
  });

  const dispatch = useDispatch();

  let categoriesList = [];

  if (isLoading) {
    console.log("Loading...");
  } else if (isSuccess) {
    categoriesList = categories;
  } else if (isError) {
    console.log(error);
  }

  const handleCategoryClick = (e) => {
    dispatch(
      setCategory({
        type: "products/fetchProducts",
        payload: e.target.innerText,
      })
    );
  };

  const handleHeaderItemClick = (e) => {
    if (e.currentTarget.lastChild.innerText === "Thingies") {
      dispatch(setRoute("Shop"));
    } else if (e.currentTarget.firstChild.classList.contains("bi-basket")) {
      dispatch(setRoute("Cart"));
    } else if (e.currentTarget.firstChild.classList.contains("bi-heart-fill")) {
      dispatch(setRoute("Favourites"));
    }
  };

  return (
    <header
      className={`col-12 d-flex justify-content-around align-items-center pt-2 pb-2 ps-0 pe-0 ${styles.header}`}
    >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categoriesList.map((category) => (
            <Dropdown.Item key={category[0]} onClick={handleCategoryClick}>
              {category[1]}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div onClick={handleHeaderItemClick} className={styles.logo}>
        <h1>Thingies</h1>
      </div>

      <div className={styles.icon} onClick={handleHeaderItemClick}>
        {filledHeart}
        <Badge pill bg="danger">
          {favourites.length}
        </Badge>
      </div>
      <div className={styles.icon} onClick={handleHeaderItemClick}>
        {basket}
        <Badge pill bg="danger">
          {cart.length}
        </Badge>
      </div>
    </header>
  );
};

export default Header;
