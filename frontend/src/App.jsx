// App.jsx

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import home from './pages/home'
import product from './pages/product'
import contactus from './pages/contactus'
import cart from './pages/cart'
import login from './pages/login'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <div>
          {/* Navbar */}
          <Navbar />

          {/* Other routes and components go here */}
          <Routes>
            <Route path="/" element={<home/>} />
            <Route path="/product" element={<product/>} />
            <Route path="/contact" element={<contactus/>} />
            <Route path="/cart" element={<cart/>} />
            <Route path="/login" element={<login/>} />
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;