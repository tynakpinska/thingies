import React, { useState, useEffect } from "react";

const Card = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const item = await (
        await fetch(`https://fakestoreapi.com/products/${Math.round(Math.random() * 20)}`)
      ).json();
      setTitle(item.title);
      setImage(item.image);
    };

    fetchItem();
  }, []);

  return (
    <div className="card col-4 col-md-2 m-1 p-1">
      <img src={image} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
};

export default Card;
