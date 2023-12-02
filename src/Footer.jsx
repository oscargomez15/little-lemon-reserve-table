import React from 'react'
import logo from './Assets/Logo.svg'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
        <img src={logo} alt={`little-lemon-${logo}`} />
        <div className="footer-info-container">
            <ul>
                <li>Contact</li>
                <li>(239)786-7508</li>
                <li>123 Main St</li>
                <li>Chicago, IL</li>
            </ul>

            <ul>
                <li>Social</li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Tik Tok</a></li>
            </ul>

            <ul>
                <li>Navigation</li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reserve a Table</a></li>
                <li><a href="">About Us</a></li>
            </ul>
        </div>
    </footer>
  )
}
