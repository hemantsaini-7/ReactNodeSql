import React from "react";

function Navbar() {
  return (
    <header>
      <a href='/' className='logo'>
        LOGO
      </a>
      <ul className='links'>
        <a href='#' className='link'>
          <li>Home</li>
        </a>
        <a href='#' className='link'>
          <li>About</li>
        </a>
        <a href='#' className='link'>
          <li>Services</li>
        </a>
        <a href='#' className='link'>
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
}

export default Navbar;
