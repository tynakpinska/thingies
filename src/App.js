import React from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Shop from "./Components/Routes/Shop";
import Favourites from "./Components/Routes/Favourites";
import Cart from "./Components/Routes/Cart";
import Product from "./Components/Routes/Product";
import Footer from "./Components/Footer";

const App = () => {
  const route = useSelector((state) => {
    return state.route;
  });

  return (
    <div className="container-fluid text-center p-0" style={{height: "100vh", position: "absolute"}}>
      <div className="row justify-content-center m-auto">
        <Header />
        {route === "Shop" ? (
          <Shop />
        ) : route === "Favourites" ? (
          <Favourites />
        ) : route === "Cart" ? (
          <Cart />
        ) : (
          <Product />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
