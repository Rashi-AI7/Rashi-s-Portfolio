import "./HeroStyles.css";
import {Link} from "react-router-dom";
import React from 'react'

export default function Hero() {
  return (
    <>
    <section className="hero">
    <h1 className="hero-title">Crafting Digital <br/>
    <span className="gradient-text">Experiences.</span>
    </h1>
    <p className="hero-subtitle">Hi, I am <span class="highlight">Rashi Singh</span>. I specialize in building robust applications using the MERN stack. With a deep commitment to writing optimized code through Data Structures and Algorithms in Java, along with versatility in Python, I focus on creating software that is not just functional, but high-performing.</p>
    <div className="hero-btns">
        <Link to="/project" className="btn btn-pri">View my Work</Link>
        <Link to="/Rashi_Singh Resume.pdf" download="Rashi_Singh_Resume" target="_blank" className="btn btn-sec"> Download Resume</Link>
    </div>

    
    </section>
    </>
  )
}
