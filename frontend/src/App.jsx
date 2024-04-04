// App.jsx

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home'
import Product from './pages/product'
import Contactus from './pages/contactus'
import Cart from './pages/aboutus'
import Login from './pages/login'
import Signup from './pages/signup';
import './App.css'
import Aboutus from './pages/aboutus';

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
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;