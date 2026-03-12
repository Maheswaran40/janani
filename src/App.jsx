import React from "react";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./assets/pages/Error";
import Header from "./assets/pages/Header";
// import Footer from "./assets/pages/Footer";
import Products from "./assets/pages/products/Products";
import UseState from "./assets/pages/UseState";
import CRUD from "./assets/pages/CRUD";
// import Contextdata from "./assets/Contextprovider/Contextdata";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Contextdata> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/Product/:navid" element={<Products />} />
            <Route path="*" element={<Error />} />
          </Routes>
          {/* <Footer /> */}
        {/* </Contextdata> */}
      </BrowserRouter>
    </>
  );
}

export default App;
