import React from "react";
import headerpic from "./assets/header-image.jpg";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.headerdiv}>
        <img src={headerpic} alt="todo pic" />
        <img src={headerpic} alt="todo pic" />
      </div>
    </React.Fragment>
  );
};

export default Header;
