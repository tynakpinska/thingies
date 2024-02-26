import React from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Shop from "./Components/Routes/Shop";
import Favourites from "./Components/Routes/Favourites";
import Cart from "./Components/Routes/Cart";

const App = () => {
  const route = useSelector((state) => {
    return state.route;
  });

  return (
    <div className="container-fluid text-center p-2">
      <Header />
      {route === "Shop" ? (
        <Shop />
      ) : route === "Favourites" ? (
        <Favourites />
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default App;
