import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>┬ęCopyright {currentYear} || All right reserved </p>
    </footer>
  );
};

export default Footer;
