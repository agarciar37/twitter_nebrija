'use client'

import { useState } from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="auth-box">
          <button className="auth-switch-btn" onClick={() => setIsLogin(false)}>
            Register
          </button>
          <Login />
        </div>
      ) : (
        <div className="auth-box">
          <button className="auth-switch-btn" onClick={() => setIsLogin(true)}>
            Login
          </button>
          <Register />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
