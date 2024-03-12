import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ value, variant, onClick }) => {
  return (
    <Button className={variant === "link" ? "p-0" : null} variant={variant} onClick={onClick}>
      {value}
    </Button>
  );
};

export default CustomButton;
