import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`row p-2 ${styles.footer}`}
    >
      <p>@ Tyna Kpińska 2024</p>
    </footer>
  );
};

export default Footer;