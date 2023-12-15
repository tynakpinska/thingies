import React from "react";
import { menu, search, filledHeart, basket } from "../icons";

const Header = () => {
  return (
    <header className="d-flex justify-content-around align-items-center">
      {menu}
      <h1>Thingies</h1>
      {search}
      {filledHeart}
      {basket}
    </header>
  );
};

export default Header;
