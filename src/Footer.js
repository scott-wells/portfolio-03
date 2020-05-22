import React from "react";

import logo from "./img/pixel-scott.png";

const Footer = () => {
  return (
    <footer className='section-wrap'>
      <div className='footer'>
        <div className='nav-links'>
          <ul>
            <li>
              <a href='#02' target='_self'>
                Work
              </a>
            </li>
            {/* <li>
              <a href='#' target='_self'>
                Blog
              </a>
            </li> */}
            <li>
              <a href='#03' target='_self'>
                About
              </a>
            </li>
            <li>
              <a href='#04' target='_self'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a href='/' target='_self'>
          <div className='logo'>
            <img src={logo} alt='Logo' />
            <h1>Scott Wells &copy; 2020</h1>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
