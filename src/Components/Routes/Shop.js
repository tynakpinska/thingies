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
      <h2 className="col-12 mt-2 ps-0 pe-0">Shop</h2>
      <div className="col-8 input-group ps-0 pe-0">
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ background: "#ffaaaa", outline: "none", border: "none" }}
        >
          {search}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search bar"
          aria-describedby="basic-addon1"
          style={{ background: "#ffaaaa", outline: "none", border: "none" }}
        />
      </div>

      <h2 className="col-12 ps-0 pe-0">{chosenCategory}</h2>

      <ProductsList />
    </>
  );
};

export default Shop;
