import React from "react";
import "./App.scss";
import RecentWork from "./RecentWork";

import logo from "./img/pixel-scott.png";
import pic from "./img/profile-pic.jpg";
import squarespace from "./img/squarespace-logo.png";
import react from "./img/react-logo.png";

function App() {
  return (
    <div className='App'>
      {/* HEADER */}
      <nav className='section-wrap'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='Logo' />
            <h1>Scott Wells</h1>
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <a href='#' target='_self'>
                  Work
                </a>
              </li>
              <li>
                <a href='#' target='_self'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' target='_self'>
                  About
                </a>
              </li>
              <li>
                <a href='#' target='_self'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className='section-wrap'>
        <div className='hero'>
          <div className='hero-text'>
            <h1>
              Hi there! <br /> I'm Scott ✌🏻
            </h1>
            <p>
              I am a front end developer. I design websites for makers,
              creatives, and small businesses. I love photography, typography,
              UX/UI, and all things code.
            </p>
            <div>
              <a
                class='p-3'
                href='https://github.com/scott-wells'
                target='_blank'
              >
                <i className='fab fa-github-alt'></i>
              </a>
              <a
                class='p-3'
                href='https://www.instagram.com/scott.m.wells'
                target='_blank'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>

          <div className='card-img'>
            <img src={pic} alt='profile pic'></img>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <RecentWork />

      {/* Latest Articles
      <section className='section-wrap'>
        <div className='latest-articles'>
          <h2>Writings</h2>
          <div className='article-01'>
            <hr />
            <h3>Article 01 - 20.05.05</h3>
            <p>
              Toffee biscuit cake gummies bonbon. Marzipan macaroon apple pie
              ice cream candy canes jelly jelly beans sweet roll dragée. Donut
              jelly brownie jelly beans topping. Gingerbread bear claw ice
              cream.
            </p>
          </div>
          <div className='article-02'>
            <hr />
            <h3>Article 01 - 20.05.03</h3>
            <p>
              Toffee biscuit cake gummies bonbon. Marzipan macaroon apple pie
              ice cream candy canes jelly jelly beans sweet roll dragée. Donut
              jelly brownie jelly beans topping. Gingerbread bear claw ice
              cream.
            </p>
          </div>
        </div>
      </section> */}

      {/* ABOUT SECTION */}
      <section className='section-wrap'>
        <div className='about'>
          <h2>About Me</h2>
          <div className='about-facts'>
            <ul>
              <li>I write code 💻</li>
              <li>let favoriteMeal = [🍔, 🍟, 🥤]</li>
              <li>I also enjoy: ☕, 🍺, 🍜, 🌯</li>
              <li>I'm a photographer: 📷</li>
              <li>Gardening is fun: 👨🏻‍🌾, 🍅, 🌻</li>
              <li>Also longboarding & camping: 🛹, 🗻</li>
              <li>const FAMILY = [🧔🏻, 👩🏻, 👧🏻, 👧🏻] </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className='section-wrap'>
        <div className='contact'>
          <h2>Contact Links</h2>
          <div className='contact-links'>
            <a
              class='p-3'
              href='mailto:contact@scott-wells.com'
              target='_blank'
            >
              <i className='fas fa-envelope'></i>
            </a>
            <a
              class='p-3'
              href='https://github.com/scott-wells'
              target='_blank'
            >
              <i className='fab fa-github-alt'></i>
            </a>
            <a
              class='p-3'
              href='https://www.instagram.com/scott.m.wells'
              target='_blank'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              class='p-3'
              href='https://www.linkedin.com/in/scott-wells-1a3119161/'
              target='_blank'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='section-wrap'>
        <div className='footer'>
          <div className='nav-links'>
            <ul>
              <li>
                <a href='#' target='_self'>
                  Work
                </a>
              </li>
              <li>
                <a href='#' target='_self'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' target='_self'>
                  About
                </a>
              </li>
              <li>
                <a href='#' target='_self'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='logo'>
            <img src={logo} alt='Logo' />
            <h1>Scott Wells &copy; 2020</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
