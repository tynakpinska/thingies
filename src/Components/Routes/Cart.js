import React from "react";
import { useSelector } from "react-redux";
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
      <button type="button" class="btn btn-primary">
        Go to payment
      </button>
    </>
  );
};

export default Cart;
