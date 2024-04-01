import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`row d-flex align-items-center p-2 m-0 ${styles.footer}`}
    >
      <p>@ Tyna Kpińska 2024</p>
    </footer>
  );
};

export default Footer;
