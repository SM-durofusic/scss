import React from "react";
import styles from "./Header.module.scss";

const Header = props => {
  console.log({ styles });
  return <h1 className={styles.header}>{props.title}</h1>;
};

export default Header;
