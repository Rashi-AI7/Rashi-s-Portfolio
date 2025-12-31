import "./NavStyle.css";
import {Link} from "react-router-dom";
import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 1){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      <h1>RS.</h1>
      </Link>
      <ul className= {click?"nav-menu active":"nav-menu"}> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#6366f1"}}/>) : (<FaBars size={20} style={{color: "#6366f1"}}/>)}
      </div>
    </div>
  )
}
