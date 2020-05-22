import React from "react";

import pic from "./img/profile-pic.jpg";

const Hero = () => {
  return (
    <section className='section-wrap'>
      <div className='hero'>
        <div className='hero-text'>
          <h1 id='01'>
            Hi there! <br /> I'm Scott{" "}
            <span role='img' aria-label='peace hand'>
              ✌🏻
            </span>
          </h1>
          <p>
            I am a front end developer. I design websites for makers, creatives,
            and small businesses. I love photography, typography, UX/UI, and all
            things code.
          </p>
          <div>
            <a
              href='https://github.com/scott-wells'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github-alt'></i>
            </a>
            <a
              href='https://www.instagram.com/scott.m.wells'
              target='_blank'
              rel='noopener noreferrer'
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
  );
};

export default Hero;
