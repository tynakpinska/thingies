import React, { useState, useEffect } from "react";
import { heart } from "../icons";

const Card = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const item = await (
          await fetch(
            `https://fakestoreapi.com/products/${Math.round(
              Math.random() * 20
            )}`
          )
        ).json();
        setTitle(item.title.slice(0, 20) + "...");
        setImage(item.image);
        setPrice(item.price + "$");
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem();
  }, []);

  return (
    <div
      className="card col-4 col-md-2 m-1 p-2"
      style={{ backgroundColor: "#FFAAAA" }}
    >
      <img
        src={image}
        className="card-img-top img-fluid p-2"
        alt="..."
        style={{ backgroundColor: "#FFF" }}
      />
      <div className="card-body p-1 d-flex flex-column justify-items-center align-items-center">
        <p className="card-title">{title}</p>
        <p>{price}</p>
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
