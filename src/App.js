import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Card from "./pages/Card";
import Main from "./conponents/Main";
import "swiper/css";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Feedback from "./pages/Feedback";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Card />}></Route>
        <Route path="/products/:id" element={<Detail />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
