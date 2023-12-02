import React from 'react'
import logo from './Assets/Logo.svg'
import './Header.css'

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="little-lemon-lego" />
        <nav>
            <ul>
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#"> About </a> </li>
                <li> <a href="#">Menu</a> </li>
                <li> <a href="#">Reservations</a> </li>
                <li> <a href="#">Order</a> </li>
                <li> <a href="#">Login</a> </li>
            </ul>
        </nav>
    </header>
  )
}
