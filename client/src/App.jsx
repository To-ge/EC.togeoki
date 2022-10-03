import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
