import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Shop from "./Components/Routes/Shop";
import Cart from "./Components/Routes/Cart";
import LogIn from "./Components/Routes/LogIn";
import Register from "./Components/Routes/Register";

import Product from "./Components/Routes/Product";
import AddProduct from "./Components/Routes/AddProduct";
import Profile from "./Components/Routes/Profile";
import Footer from "./Components/Footer";
import { useGetProductsQuery } from "./redux/shopApi";

const App = () => {
  const { isLoading, isSuccess, isError, error } = useGetProductsQuery();

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
      <div className="row vh-95 justify-content-center  m-auto">
        <Router basename="/thingies">
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/favourites" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </div>
  );
};

export default App;
