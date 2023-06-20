import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/log-in" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
