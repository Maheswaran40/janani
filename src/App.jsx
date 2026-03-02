import React from "react"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Contact from "./assets/pages/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./assets/pages/Error"
import Header from "./assets/pages/Header"
import Footer from "./assets/pages/Footer"
import Products from "./assets/pages/products/Products"
function App(){
  return(
    <>




<BrowserRouter>
<Header/>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/Product/:navid" element={<Products/>}/>
<Route path="*" element={<Error/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    
    
    </>
  )
}

export default App