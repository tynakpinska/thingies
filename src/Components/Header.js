import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import styles from "./Header.module.css";
import { filledHeart, basket, boxArrowRight } from "../icons";

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
    dispatch(setCategory(e.target.innerText));
  };

  const handleHeaderItemClick = (e) => {
    if (e.currentTarget.lastChild.innerText === "Thingies") {
      dispatch(setRoute("Shop"));
    } else if (e.currentTarget.firstChild.classList.contains("bi-basket")) {
      dispatch(setRoute("Cart"));
    } else if (e.currentTarget.firstChild.classList.contains("bi-heart-fill")) {
      dispatch(setRoute("Favourites"));
    } else if (
      e.currentTarget.firstChild.classList.contains("bi-box-arrow-in-right")
    ) {
      dispatch(setRoute("LogIn"));
    }
  };

  return (
    <header className={`row m-0 p-2 ${styles.header}`}>
      <Dropdown className="col d-flex justify-content-center align-items-center p-2">
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
      <div onClick={handleHeaderItemClick} className={`col ${styles.logo}`}>
        <h1 className="mb-0">Thingies</h1>
      </div>

      <div className={`col ${styles.icon}`} onClick={handleHeaderItemClick}>
        {filledHeart}
        <Badge pill bg="danger">
          {favourites.length}
        </Badge>
      </div>
      <div className={`col ${styles.icon}`} onClick={handleHeaderItemClick}>
        {basket}
        <Badge pill bg="danger">
          {cart.length}
        </Badge>
      </div>
      <div className={`col ${styles.icon}`} onClick={handleHeaderItemClick}>
        {boxArrowRight}
      </div>
    </header>
  );
};

export default Header;
