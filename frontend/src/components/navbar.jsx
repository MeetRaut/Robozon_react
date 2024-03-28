import React from 'react'
import './css/navbar.css'


// const logo = {path of the logo}

const Navbar = () => {
  return (
    <nav className='nav'>
        <a>ROBOZON</a>
        
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Product Page</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
        </ul>   
    </nav>
  )
}

export default Navbar;