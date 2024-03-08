import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import ProductsList from "../ProductsList";

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cart;
  });

  let sum = 0;

  cart.forEach((product) => {
    sum += product.price;
  });

  return (
    <>
      <h2>Cart</h2>
      <ProductsList />
      <h3>Total: {sum} $</h3>
      <Button type="button" className="btn btn-primary">
        Go to payment
      </Button>
    </>
  );
};

export default Cart;
