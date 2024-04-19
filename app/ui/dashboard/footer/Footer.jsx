import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Adham Dev</div>
      <div className={styles.copyright}>&copy; 2024. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
