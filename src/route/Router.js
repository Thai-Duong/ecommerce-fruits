import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Card from "../pages/Card";
import Feedback from "../pages/Feedback";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/cart" element={<Card />}></Route>
      <Route path="/products/:id" element={<Detail />}></Route>
      <Route path="/feedback" element={<Feedback />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Router;
