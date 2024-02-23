import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { heart, filledHeart } from "../icons";

import { addToCart, removeFromCart } from "../redux/stateSlices/cartSlice";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/stateSlices/favouritesSlice";

const Card = ({ product }) => {
  const [buttonText, setButtonText] = useState("Add to cart");
  const [currentIcon, setCurrentIcon] = useState(heart);
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      console.log('fetching image')
      const response = await fetch("https://source.unsplash.com/random/300x300");
      setImageUrl(response.url);
    }
    fetchData();
  }, []);

  const handleButtonClick = () => {
    if (buttonText === "Add to cart") {
      setButtonText("Remove from cart");
      dispatch(addToCart(product));
    } else {
      setButtonText("Add to cart");
      dispatch(removeFromCart(product));
    }
  };

  const handleIconClick = () => {
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
      className="card col-3 col-md-2 m-1 p-2 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#FFAAAA" }}
    >
      <img
        src={imageUrl}
        className="card-img-top img-fluid p-2"
        alt="..."
        style={{ backgroundColor: "#FFF", maxHeight: "50%" }}
      />
      <div className="card-body p-1 d-flex flex-column justify-content-center align-items-center flex-grow-0">
        <p className="card-title">{product.title}</p>
        <p>{product.price + "$"}</p>
        <div className="d-flex align-items-center justify-items-center mt-1">
          <div onClick={handleIconClick}>{currentIcon}</div>
          <button
            className={`btn ${
              buttonText === "Add to cart" ? "btn-success" : "btn-danger"
            } ms-1`}
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
