import React, { useRef } from 'react'
import './Homepage.css'

export const Homepage = () => {
  const hamburgerIcon = useRef();
  const hamburgerMenu = useRef();

  const ToggleAnimation = (e, hamburgerMenu) => {
    e.target.classList.toggle('is-active');
    hamburgerMenu.current.classList.toggle('is-active');
  }

  return (
    <div>
      <button className='hamburger is-active' ref={hamburgerIcon} onClick={(e) => {ToggleAnimation(e, hamburgerMenu)}}>
        <div className='bar'></div>
      </button>

      <nav className='mobile-nav is-active' ref={hamburgerMenu}>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  )
}
