import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Services from "../pages/User/Services";
import About from "../pages/User/About";
import Contact from "../pages/User/Contact";
import Cart from "../pages/User/Cart";
import Home from "../pages/User/Home";
import Shop from "../pages/User/Shop";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/User/Profile";
import Orders from "../pages/User/Orders";

const Routes = () => {
  const userValue = useSelector((state) => state.user.value);
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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
