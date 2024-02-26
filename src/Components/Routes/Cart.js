import React from "react";
import ProductsList from "../ProductsList";

const Cart = () => {
    return (
        <>
          <h2>Cart</h2>
          <ProductsList />
          <h3>Total: 30 $</h3>
          <button>Go to payment</button>
        </>
      );
};

export default Cart;
