import React from 'react'
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom'
import "../style/index.css"
function Header() {
  return (
    <>


      <nav>

    <img src={logo} height="100px" width="100px" alt="" />
    <form action="">
      <input type="search" placeholder='search' />
      <input type="submit" />
    </form>
    <div id='nav-link'>
    <Link to="/" style={{color:"black",textDecoration:"none",fontSize:"30px"}}>Home</Link>
    <Link to="/about"  style={{color:"black",textDecoration:"none",fontSize:"30px"}}>About</Link>
    <Link to="/contact"  style={{color:"black",textDecoration:"none",fontSize:"30px"}}>Contact</Link>
    </div>
      </nav>
   
    </>
  )
}

export default Header