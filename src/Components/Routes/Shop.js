import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductsList from "../ProductsList";
import TextInput from "../TextInput";

const Shop = () => {
  const [filteringString, setFilteringString] = useState("");

  const chosenCategory = useSelector((state) => {
    return state.chosenCategory;
  });

  const handleInputChange = (e) => {
    let string = e.target.value.toLowerCase();
    setFilteringString(string);
  };

  return (
    <>
      <TextInput onChange={handleInputChange} />
      <h2 className="col-12 pt-2 ps-0 pe-0">{chosenCategory}</h2>
      <ProductsList filteringString={filteringString} />
    </>
  );
};

export default Shop;
