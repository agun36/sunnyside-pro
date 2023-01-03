import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowdown from '../assets/images/icon-arrow-down.svg'
import openicon from '../assets/images/mobile/icon-hamburger.svg'
import { MobileNav } from './MobileNav'
export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <>
      <nav className='navbar'>
        <div className='d-flex'>
          <h3 className='logo'>sunnyside</h3>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' onClick={handleToggle}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/service' className='nav-link' onClick={handleToggle}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/project' className='nav-link' onClick={handleToggle}>
                Projects
              </Link>
            </li>
            <li className='nav-item nav-item-button'>
              <Link
                to='/contact'
                className='nav-link navlink-btn'
                onClick={handleToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='menu-icon' onClick={handleToggle}>
          <img src={openicon} alt='' />
        </div>
        <h2 className='nav-title'>We are creatives</h2>
        <div className='nav-contents'>
          <img src={arrowdown} alt='' className='arrowdown' />
        </div>
        <MobileNav navBarOpen={navbarOpen} />
      </nav>
    </>
  )
}
