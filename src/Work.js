import React from "react";
import SassIcon from "./img/SassIcon";

import squarespace from "./img/squarespace-logo.png";
import react from "./img/react-logo.png";
import HtmlIcon from "./img/HtmlIcon";
import JavascriptIcon from "./img/JavascriptIcon";
import GitIcon from "./img/GitIcon";
import PhpIcon from "./img/PhpIcon";
import WordpressIcon from "./img/WordpressIcon";
import MysqlIcon from "./img/MysqlIcon";
import CssIcon from "./img/CssIcon";
import MapboxIcon from "./img/mapbox-logo.png";

const Work = (props) => {
  return (
    <section className='section-wrap'>
      <div className='recent-work'>
        <h2 id='02'>Recent Work</h2>
        <hr />
        <div className='work'>
          <h3>
            <a
              href='https://scott-wells.com/trail-finder'
              target='_blank'
              rel='noopener noreferrer'
            >
              Trail Finder
            </a>
          </h3>
          <p>
            This is a simple app built in React that pulls from the{" "}
            <a
              href='hikingproject.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              hikingproject.com
            </a>{" "}
            API to get trails within a certain radius from Albuquerque, NM. At
            the moment, it populates a map built with Mapbox and displays
            markers featuring trail images, rating and length. User favorites
            and search still to come!
          </p>
          <div className='tech-stack'>
            <p>Tech Stack:</p>
            <div className='tech-icons'>
              <HtmlIcon />
              <CssIcon />
              <SassIcon />
              <JavascriptIcon />
              <img src={react} alt='react logo' />
              <img src={MapboxIcon} alt='mapbox logo' />
              <GitIcon />
            </div>
          </div>
        </div>
        <hr />
        <div className='work'>
          <h3>
            <a
              href='http://lisaforsenatedistrict12.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              lisaforsenatedistrict12.com
            </a>
          </h3>
          <p>
            This was a site created in Wordpress using a few design plugins and
            custom CSS. Pretty standard stuff. SMTP and Anedot donation service
            integration.
          </p>
          <div className='tech-stack'>
            <p>Tech Stack:</p>
            <div className='tech-icons'>
              <HtmlIcon />
              <CssIcon />
              <PhpIcon />
              <MysqlIcon />
              <WordpressIcon />
            </div>
          </div>
        </div>
        <hr />
        <div className='work'>
          <h3>
            <a
              href='https://elizabethwellsphotography.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              elizabethwellsphotography.com
            </a>
          </h3>
          <p>
            This is my other business. I've designed and redesigned this site
            and brand many times. Right now, it runs on Squarespace. Custom CSS
            added with the theme.
          </p>
          <div className='tech-stack'>
            <p>Tech Stack:</p>
            <div className='tech-icons'>
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <img src={squarespace} alt='squarespace logo' />
            </div>
          </div>
        </div>
        <hr />
        <div className='work'>
          <h3>
            <a href='https://scott-wells.com'>scott-wells.com</a>
          </h3>
          <p>
            Of course I have to include this portfolio site. I designed this
            portfolio in React, with custom styles and Sass. Heavily inspired by
            these people:
            <a
              href='https://adamthedev.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              &nbsp;Adam The Dev
            </a>
            ,
            <a
              href='https://www.taniarascia.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              &nbsp;Tania Rascia
            </a>
            , and
            <a
              href='https://christophermurphy.dev/'
              target='_blank'
              rel='noopener noreferrer'
            >
              &nbsp;Christopher Murphy
            </a>
            .
          </p>
          <div className='tech-stack'>
            <p>Tech Stack:</p>
            <div className='tech-icons'>
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <SassIcon />
              <GitIcon />
              <img src={react} alt='react logo' />
            </div>
          </div>
        </div>
        <hr />
        <div className='work'>
          <h3>
            <a href='https://sandyrauschnmsenate.com/' target='blank'>
              sandyrauschnmsenate.com
            </a>
          </h3>
          <p>
            This is another one of my Wordpress sites designed with Elementor
            and custom CSS. SMTP mail and Anedot donation service integration.
          </p>
          <div className='tech-stack'>
            <p>Tech Stack:</p>
            <div className='tech-icons'>
              <HtmlIcon />
              <CssIcon />
              <PhpIcon />
              <MysqlIcon />
              <WordpressIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
