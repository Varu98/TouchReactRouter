import "./styles.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";

import ProductDetail from "./pages/ProductDetail";
import { Link, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>||
      <Link to="/pages/WishList">WishList</Link>||
      <Link to="/pages/cart">Cart</Link>||
      <Link to="/pages/productDetail">ProductDetail</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/pages/WishList" element={<WishList />} />
        <Route path="/pages/ProductDetail" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
