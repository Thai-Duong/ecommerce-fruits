import React from "react";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";
import Router from "../route/Router";
const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
