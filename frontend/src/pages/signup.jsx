import React from 'react'
import "./css/signup.css";

function Signup(){
  return (
    <div>
      <div class="signup-input">
        <h1>SIGN UP</h1>
        <div class="signup-input-box">
          <input type="text" placeholder="E-mail" required />
        </div>
        <div class="signup-input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div class="signup-input-box">
          <input type="password" placeholder="New Password" required />
        </div>

        <a href="/">
          <button type="Submit" class="btn">
            signup
          </button>
        </a>
        <div class="register-link">
          <p>Don't have an account?</p>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Signup