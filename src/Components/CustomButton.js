import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ value, variant, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {value}
    </Button>
  );
};

export default CustomButton;
