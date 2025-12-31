import "./FooterStyle.css";
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
        <div className="footer-content">
        <p>&#169; {new Date().getFullYear()} Rashi Singh. All rights reserved.</p>
        <p>Built with React & &#10084;</p>
        </div>
        </div>
    </footer>
  )
}
