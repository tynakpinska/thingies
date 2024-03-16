import React from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Shop from "./Components/Routes/Shop";
import LogIn from "./Components/Routes/LogIn";
import Register from "./Components/Routes/Register";
import Favourites from "./Components/Routes/Favourites";
import Cart from "./Components/Routes/Cart";
import Product from "./Components/Routes/Product";
import Profile from "./Components/Routes/Profile";
import Footer from "./Components/Footer";
import { useGetProductsQuery } from "./redux/shopApi";

const App = () => {
  const { isLoading, isSuccess, isError, error } = useGetProductsQuery();
  const route = useSelector((state) => {
    return state.route;
  });
  if (isLoading) {
    console.log("loading");
  } else if (isSuccess) {
    console.log("success");
  } else if (isError) {
    console.log("error", error);
    /* productsList = <p>{error}</p>; */
  }

  return (
    <div className="container-fluid text-center p-0">
      <div className="row vh-100 justify-content-center align-items-between m-auto">
        <Header />
        {route === "Shop" ? (
          <Shop />
        ) : route === "Favourites" ? (
          <Favourites />
        ) : route === "Cart" ? (
          <Cart />
        ) : route === "LogIn" ? (
          <LogIn />
        ) : route === "Register" ? (
          <Register />
        ) : route === "Profile" ? (
          <Profile />
        ) : (
          <Product />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
