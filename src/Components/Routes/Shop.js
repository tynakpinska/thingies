import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductsList from "../ProductsList";
import TextInput from "../TextInput";

const Shop = () => {
  const [filteringString, setFilteringString] = useState("");
  const location = useLocation();

  const chosenCategory = useSelector((state) => {
    return state.chosenCategory;
  });

  const handleInputChange = (e) => {
    let string = e.target.value.toLowerCase();
    setFilteringString(string);
  };

  return (
    <>
      {location.pathname === "/" ? (
        <>
          <TextInput onChange={handleInputChange} />
          <h2 >{chosenCategory}</h2>
        </>
      ) : null}
      <ProductsList filteringString={filteringString} />
    </>
  );
};

export default Shop;
