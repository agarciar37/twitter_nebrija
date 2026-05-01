'use client'


import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";

 const   login = () => {

  const router=useRouter()
  

  const [mostrar,setMostrar] = useState<string>()
  const [login,setLogin] = useState<boolean>(true)
  const [register,setRegister] = useState<boolean>(false)
  

  
 return (
  <div className="auth-container">

    {login &&
      <div className="auth-box"> 
        <button 
          className="auth-switch-btn"
          onClick={() => {setRegister(true); setLogin(false)}}
        >
          Register
        </button>

        <Login/>
      </div>
    }

    {register &&
      <div className="auth-box"> 
        <button 
          className="auth-switch-btn"
          onClick={() => {setRegister(false); setLogin(true)}}
        >
          Login
        </button>

        <Register/>
      </div>
    }

  </div>
);
}


export default login;