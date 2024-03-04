import React from "react";
import { search } from "../icons";
import styles from "./TextInput.module.css";

const TextInput = ({ onChange }) => {
  return (
    <>
      <h2 className="col-12 mt-2 ps-0 pe-0">Shop</h2>
      <div className="w-50 input-group ps-0 pe-0">
        <span className={`input-group-text ${styles.input}`} id="basic-addon1">
          {search}
        </span>
        <input
          type="text"
          className={`form-control ${styles.input}`}
          placeholder="Search..."
          aria-label="Search bar"
          aria-describedby="basic-addon1"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default TextInput;
