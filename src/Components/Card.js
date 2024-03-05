import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heart, filledHeart } from "../icons";
import styles from "./Card.module.css";

import { addToCart, removeFromCart } from "../redux/stateSlices/cartSlice";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/stateSlices/favouritesSlice";
import { setRoute } from "../redux/stateSlices/routeSlice";
import { setCurrentProduct } from "../redux/stateSlices/currentProductSlice";

const Card = ({ product }) => {
  const [buttonText, setButtonText] = useState("Add to cart");
  const [currentIcon, setCurrentIcon] = useState(heart);
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const cart = useSelector((state) => {
    return state.cart;
  });

  const favourites = useSelector((state) => {
    return state.favourites;
  });

  useEffect(() => {
    if (cart.find((item) => item.id === product.id)) {
      setButtonText("Remove from cart");
    }
    if (favourites.find((item) => item.id === product.id)) {
      setCurrentIcon(filledHeart);
    }
    const imageUrlRegex = new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi
    );
    setImage(product.images[0].match(imageUrlRegex)[0]);
  }, [cart, favourites, product, image]);

  const handleCardClick = e => {
    e.stopPropagation();
    dispatch(setRoute("Product"));
    dispatch(setCurrentProduct(product));
  };

  const handleButtonClick = e => {
    e.stopPropagation();
    if (buttonText === "Add to cart") {
      setButtonText("Remove from cart");
      dispatch(addToCart(product));
    } else {
      setButtonText("Add to cart");
      dispatch(removeFromCart(product));
    }
  };

  const handleIconClick = e => {
    e.stopPropagation();
    if (currentIcon === heart) {
      setCurrentIcon(filledHeart);
      dispatch(addToFavourites(product));
    } else {
      setCurrentIcon(heart);
      dispatch(removeFromFavourites(product));
    }
  };
  return (
    <div
      className={`card col-10 col-sm-3 col-lg-2 m-2 p-3 justify-content-between ${styles.card}`}
      style={{ backgroundColor: "#FFAAAA" }}
      onClick={handleCardClick}
    >
      <img
        src={image}
        className="card-img-top img-fluid p-2"
        alt="..."
        style={{
          backgroundColor: "#FFF",
          maxHeight: "50%",
          minWidth: "100px",
        }}
      />
      <div className="card-body p-1 d-flex flex-column justify-content-center align-items-center flex-grow-0">
        <p className="card-title fw-bold">{product.name}</p>
        <p>{product.price + "$"}</p>
        <div className="d-flex align-items-center justify-items-center mt-1">
          <div onClick={handleIconClick}>{currentIcon}</div>
          <button
            className={`btn ${
              buttonText === "Add to cart" ? "btn-success" : "btn-danger"
            } ms-2`}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
