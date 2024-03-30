import React from "react";
import "./css/login.css";

function Login() {
  return (
    <div>
      <div class="login-input">
        <h1>LOGIN</h1>
        <div class="login-input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div class="login-input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <a href="/">
          <button type="Submit" class="btn">
            Login
          </button>
        </a>
        <div class="register-link">
          <p>Don't have an account?</p>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;