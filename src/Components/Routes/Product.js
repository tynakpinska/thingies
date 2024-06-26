import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { heart, filledHeart, arrowLeft } from "../../icons";
import CustomButton from "../CustomButton";
import { addToCart, removeFromCart } from "../../redux/stateSlices/cartSlice";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/stateSlices/favouritesSlice";

const Product = () => {
  const [buttonText, setButtonText] = useState("Add to cart");
  const [currentIcon, setCurrentIcon] = useState(heart);

  const currentProduct = useSelector((state) => {
    return state.currentProduct;
  });

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (buttonText === "Add to cart") {
      setButtonText("Remove from cart");
      dispatch(addToCart(currentProduct));
    } else {
      setButtonText("Add to cart");
      dispatch(removeFromCart(currentProduct));
    }
  };

  const handleIconClick = () => {
    if (currentIcon === heart) {
      setCurrentIcon(filledHeart);
      dispatch(addToFavourites(currentProduct));
    } else {
      setCurrentIcon(heart);
      dispatch(removeFromFavourites(currentProduct));
    }
  };

  return (
    <>
      <div>
        <Link to="/">{arrowLeft}</Link>
      </div>

      <h3 className="m-3">Product</h3>
      <div className="d-flex align-items-center">
        <Carousel fade className="w-50 m-3">
          <Carousel.Item>
            <img
              src={currentProduct.images[0]}
              className="img-fluid"
              alt={currentProduct.name}
            />
            <Carousel.Caption>
              <h3>{currentProduct.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={currentProduct.images[1]}
              className="img-fluid"
              alt={currentProduct.name}
            />
            <Carousel.Caption>
              <h3>{currentProduct.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={currentProduct.images[2]}
              className="img-fluid"
              alt={currentProduct.name}
            />
            <Carousel.Caption>
              <h3>{currentProduct.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="w-50 p-3">
          <p className="text-start">{currentProduct.description}</p>
          <p className="text-start">{currentProduct.price} $</p>
          <div className="d-flex align-items-center justify-items-center mt-1">
            <div onClick={handleIconClick}>{currentIcon}</div>
            <CustomButton
              variant={buttonText === "Add to cart" ? "success" : "danger"}
              onClick={handleButtonClick}
              value={buttonText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
