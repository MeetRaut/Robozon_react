// App.jsx

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home'
import Product from './pages/product'
import Contactus from './pages/contactus'
import Cart from './pages/cart'
import Login from './pages/login'
import Signup from './pages/signup';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <div>
          {/* Navbar */}
          <Navbar />

          {/* Other routes and components go here */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;