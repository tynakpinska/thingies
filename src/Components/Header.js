import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Header.module.css";
import { menu, filledHeart, basket } from "../icons";

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
    } else if (e.currentTarget.lastChild.classList.contains("bi-basket")) {
      dispatch(setRoute("Cart"));
    } else if (e.currentTarget.lastChild.classList.contains("bi-heart-fill")) {
      dispatch(setRoute("Favourites"));
    }
  };

  return (
    <header className="d-flex justify-content-around align-items-center">
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className={styles.dropdown}
        >
          {menu}Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categoriesList.map((category) => (
            <Dropdown.Item
              key={category[0]}
              className={styles.dropdownItem}
              onClick={handleCategoryClick}
            >
              {category[1]}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div onClick={handleHeaderItemClick} className={styles.header}>
        <h1>Thingies</h1>
      </div>

      <div className={styles.icon} onClick={handleHeaderItemClick}>
        <span className={styles.numberOfItems}>{favourites.length}</span>
        {filledHeart}
      </div>
      <div className={styles.icon} onClick={handleHeaderItemClick}>
        <span className={styles.numberOfItems}>{cart.length}</span>
        {basket}
      </div>
    </header>
  );
};

export default Header;
