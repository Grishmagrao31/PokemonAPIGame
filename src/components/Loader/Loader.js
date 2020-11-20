import React from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

const Loader = (props) => {
  return <div className={styles.Loader}>
    <div className = {styles.spinner}></div>
  </div>;
};

Loader.propTypes = {};

export default Loader;
