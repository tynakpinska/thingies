import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import CustomButton from "../CustomButton";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);

  const categories = useSelector((state) => state.categories);

  const addProductToDB = () => {
    console.log('posting product data...')
  };

  const handleClick = () => {
    addProductToDB();
  };

  const handleInputChange = (e) => {
    console.log(e.target)
  };

  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center mt-2">
        Add Product
      </h2>
      <Form className="col-11 col-sm-4">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter description"
            onChange={handleInputChange}
          />
        </Form.Group>

        <label htmlFor="category" className="mb-2">
          Category
        </label>
        <Form.Select
          aria-label="Products categories"
          id="category"
          onChange={handleInputChange}
        >
          <option>Choose category</option>
          {categories.map((category) => (
            <option key={category[0]} value={category[0]}>{category[1]}</option>
          ))}
        </Form.Select>

        <Form.Group className="mb-3" controlId="pictureUrl">
          <Form.Label className="mt-2">Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter picture URL"
            onChange={handleInputChange}
          />
        </Form.Group>

        <CustomButton variant="primary" value="Submit" onClick={handleClick} />
      </Form>
    </>
  );
};

export default AddProduct;
