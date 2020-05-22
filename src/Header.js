import React from "react";

import logo from "./img/pixel-scott.png";

const Header = () => {
  return (
    <nav className='section-wrap'>
      <div className='header'>
        <a href='/'>
          <div className='logo'>
            <img src={logo} alt='Logo' />
            <h1>Scott Wells</h1>
          </div>
        </a>

        <div className='nav-links'>
          <ul>
            <li>
              <a href='/#02'>Work</a>
            </li>

            {/* <li>
                <a href='#' target='_self'>
                  Blog
                </a>
              </li> */}

            <li>
              <a href='/#03'>About</a>
            </li>

            <li>
              <a href='/#04'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
