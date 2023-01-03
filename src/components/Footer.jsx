import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/images/desktop/icon-facebook.svg'
import instagram from '../assets/images/desktop/icon-instagram.svg'
import twitter from '../assets/images/desktop/icon-twitter.svg'
import pinterest from '../assets/images/desktop/icon-pinterest.svg'
export const Footer = () => {
  return (
    <footer className='footer'>
      <h4 className='title'>sunnyside</h4>
      <ul className='footer-list'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/service'>Services</Link>
        </li>
        <li>
          <Link to='project'>Projects</Link>
        </li>
      </ul>
      <div className='footer-icons'>
        {' '}
        <img src={facebook} alt='' />
        <img src={instagram} alt='' />
        <img src={twitter} alt='' />
        <img src={pinterest} alt='' />
      </div>
    </footer>
  )
}
