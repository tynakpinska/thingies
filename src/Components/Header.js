import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Header.module.css";
import { menu, search, filledHeart, basket } from "../icons";

import { useGetCategoriesQuery } from "../redux/shopApi";
import { setCategory } from "../redux/stateSlices/chosenCategorySlice";

const Header = () => {
  const { isLoading, isSuccess, isError, error } = useGetCategoriesQuery();

  const categories = useSelector((state) => {
    return state.categories;
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

  function handleClick(e) {
    dispatch(
      setCategory({
        type: "products/fetchProducts",
        payload: e.target.innerText,
      })
    );
  }

  return (
    <header className="d-flex justify-content-around align-items-center">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className={styles.dropdown}
        >
          {menu}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categoriesList.map((category) => (
            <Dropdown.Item
              key={category[0]}
              className={styles.dropdownItem}
              onClick={handleClick}
            >
              {category[1]}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <h1>Thingies</h1>
      <div className="input-group " style={{ width: "30vw" }}>
        <span className="input-group-text" id="basic-addon1">
          {search}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search bar"
          aria-describedby="basic-addon1"
        />
      </div>

      {filledHeart}
      {basket}
    </header>
  );
};

export default Header;
