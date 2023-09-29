import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Services from "../pages/SLVMore/Services";
import About from "../pages/SLVMore/About";
import Contact from "../pages/SLVMore/Contact";
import Cart from "../pages/User/Cart";
import Home from "../pages/Main/Home";
import Shop from "../pages/ShowProducts/Shop";
import NavBar from "../components/NavBar";
import Login from "../pages/Main/Login";
import SignUp from "../pages/Main/SignUp";
import Profile from "../pages/User/Profile";
import Orders from "../pages/User/Orders";
import SingleProduct from "../pages/ShowProducts/SingleProduct";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminRegister from "../pages/admin/AdminRegister";
import Dashboard from "../pages/admin/Dashboard";

const Routes = () => {
  const userValue = useSelector((state) => state.user.value);
  const adminValue = useSelector((state) => state.admin.value);
  const adminId = adminValue?._id;
  const uid = userValue?._id;
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
