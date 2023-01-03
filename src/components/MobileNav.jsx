import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const MobileNav = ({ navBarOpen }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className={`mobile-nav ${navBarOpen ? 'open' : ''}`} id='anchor'>
      <ul className='nav-list'>
        <li className='mobilenav-item'>
          <Link to='/about' className='mobile-nav-link' onClick={handleToggle}>
            About
          </Link>
        </li>
        <li className='mobilenav-item'>
          <Link
            to='/service'
            className='mobile-nav-link'
            onClick={handleToggle}
          >
            Services
          </Link>
        </li>
        <li className='mobilenav-item'>
          <Link
            to='/project'
            className='mobile-nav-link'
            onClick={handleToggle}
          >
            Projects
          </Link>
        </li>
        <li className='mobilenav-item mobile-nav-item-button'>
          <Link
            to='/contact'
            className='mobile-nav-link mobile-navlink-btn'
            onClick={handleToggle}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
