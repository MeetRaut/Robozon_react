// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Other routes and components go here */}
      </div>
    </Router>
  );
}

export default App;
