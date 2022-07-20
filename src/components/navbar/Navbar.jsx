import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon";
import ShoppingChartIcon from "../../assets/ShoppingCharIcon";
import styles from "./Navbar.module.css";


const Navbar = () => {
  
  return (
    <div className={styles.navbar}>
      <Link to="/"><HomeIcon /></Link>
      <Link to="/"><ShoppingChartIcon  /></Link>
    </div>
  );
};

export default Navbar;
