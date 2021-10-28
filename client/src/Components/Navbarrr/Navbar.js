import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo'>
          NATURE
          <Icons.FaTree />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
