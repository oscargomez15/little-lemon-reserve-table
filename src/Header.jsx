import React from 'react'
import logo from './Assets/Logo.svg'
import './Header.css'

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="little-lemon-lego" />
        <nav>
            <ul>
                <li> <a href="#"> HOME </a> </li>
                <li> <a href="#"> ABOUT </a> </li>
                <li> <a href="#">MENU</a> </li>
                <li> <a href="#">RESERVATIONS</a> </li>
                <li> <a href="#">ORDER</a> </li>
                <li> <a href="#">LOGIN</a> </li>
            </ul>
        </nav>
    </header>
  )
}
