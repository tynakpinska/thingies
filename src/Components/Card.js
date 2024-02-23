import React, { useState } from "react";
import { heart, filledHeart } from "../icons";

const Card = ({ product }) => {
  const [buttonText, setButtonText] = useState("Add to cart");
  const [currentIcon, setCurrentIcon] = useState(heart);

  const handleButtonClick = () => {
    buttonText === "Add to cart"
      ? setButtonText("Remove from cart")
      : setButtonText("Add to cart");
  };

  const handleIconClick = () => {
    currentIcon === heart ? setCurrentIcon(filledHeart) : setCurrentIcon(heart);
  };
  return (
    <div
      className="card col-3 col-md-2 m-1 p-2 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#FFAAAA" }}
    >
      <img
        src={product.images[0]}
        className="card-img-top img-fluid p-2"
        alt="..."
        style={{ backgroundColor: "#FFF" }}
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
