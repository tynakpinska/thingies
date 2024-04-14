import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import styles from "./Header.module.css";
import { filledHeart, basket, boxArrowRight } from "../icons";
import CustomButton from "./CustomButton";

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

  const user = useSelector((state) => {
    return state.user;
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
          {user.role === "admin" ? (
            <Dropdown.Item style={{ background: "#198754", color: "#fff" }}>
              Add category
            </Dropdown.Item>
          ) : null}
        </Dropdown.Menu>
      </Dropdown>
      <Link to="/" className={`col ${styles.logo}`}>
        <h1 className="mb-0">Thingies</h1>
      </Link>
      {user.role === "admin" ? (
        <Link to="/addProduct" className="col">
          <CustomButton value="Add product" variant="warning"></CustomButton>
        </Link>
      ) : (
        <>
          <div className={`col ${styles.icon}`}>
            <Link to="/favourites">{filledHeart}</Link>
            <Badge pill bg="danger">
              {favourites.length}
            </Badge>
          </div>
          <div className={`col ${styles.icon}`}>
            <Link to="/cart">{basket}</Link>
            <Badge pill bg="danger">
              {cart.length}
            </Badge>
          </div>
        </>
      )}
      {user.avatar ? (
        <Link to="/profile" className={`col ${styles.icon}`}>
          <img
            src={user.avatar}
            className="rounded-circle"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              backgroundPosition: "topCenter",
              cursor: "pointer",
            }}
            alt="..."
          ></img>
        </Link>
      ) : (
        <Link to="/login" className={`col ${styles.icon}`}>
          {boxArrowRight}
        </Link>
      )}
    </header>
  );
};

export default Header;
