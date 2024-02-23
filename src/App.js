import React from "react";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";

const App = () => {
  return (
    <div className="container-fluid text-center p-2">
      <Header />
      <ProductsList />
    </div>
  );
};

export default App;
