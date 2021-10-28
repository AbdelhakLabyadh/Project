import React from 'react';
import { NavLink } from '../Navbar/NavbarElements';
import './Footer.css';

const Footer = () => {
  const isAuth = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <>
      <footer className='app_footer'>
        <div className='waves'>
          <div id='wave1' className='wave'></div>
          <div id='wave2' className='wave'></div>
          <div id='wave3' className='wave'></div>
          <div id='wave4' className='wave'></div>
        </div>
        <ul className='social_icon'>
          <li>
            <a href='/'>
              <ion-icon name='logo-facebook'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-instagram'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-twitter'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-linkedin'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-youtube'></ion-icon>
            </a>
          </li>
        </ul>
        <ul className='menu'>
          {!isAuth ? (
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
          ) : role === 'enseignant' ? (
            <NavLink to='/enspage' activeStyle>
              Profile
            </NavLink>
          ) : (
            <NavLink to='/stpage' activeStyle>
              Profile
            </NavLink>
          )}
          <li>
            <NavLink to='/dictionary' activeStyle>
              Dictionnary
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-us' activeStyle>
              Contact US
            </NavLink>
          </li>
        </ul>
        <p>
          <span className='copyright'>©</span> 2021 Labyadh Abdelhak | All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
