import React from "react";
import { useSelector } from "react-redux";
import ProductsList from "../ProductsList";
import { search } from "../../icons";

const Shop = () => {

  const chosenCategory = useSelector((state) => {
    return state.chosenCategory;
  });
  return (
    <>
      <h2>Shop</h2>
      <div
        className="input-group mt-3 mb-2 "
        style={{ width: "30vw", margin: "auto", background: "#ffaaaa" }}
      >
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ background: "#ffaaaa", outline: "none" }}
        >
          {search}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search bar"
          aria-describedby="basic-addon1"
          style={{ background: "#ffaaaa", outline: "none" }}
        />
      </div>

      <h2>{chosenCategory}</h2>

      <ProductsList />
    </>
  );
};

export default Shop;
