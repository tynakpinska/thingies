import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`col-12 d-flex justify-content-around align-items-center pt-2 pb-2 ps-0 pe-0 ${styles.footer}`}
    >
      <p>@ Tyna Kpińska 2024</p>
    </footer>
  );
};

export default Footer;
