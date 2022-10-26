import React from "react";

import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <section className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
