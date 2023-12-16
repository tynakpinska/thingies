import React from "react";
import { heart } from "../icons";

const Card = ({ product }) => {
  return (
    <div
      className="card col-3 col-md-2 m-1 p-2 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#FFAAAA" }}
    >
      <img
        src={product.image}
        className="card-img-top img-fluid p-2"
        alt="..."
        style={{ backgroundColor: "#FFF" }}
      />
      <div className="card-body p-1 d-flex flex-column justify-content-center align-items-center flex-grow-0">
        <p className="card-title">{product.title.slice(0, 15) + "..."}</p>
        <p>{product.price + "$"}</p>
        <div className="d-flex align-items-center justify-items-center mt-1">
          {heart}
          <button
            className="btn btn-primary ms-1"
            style={{ backgroundColor: "#7A9F35", border: "none" }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
