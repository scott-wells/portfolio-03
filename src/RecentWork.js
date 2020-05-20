import React from "react";
import SassIcon from "./img/SassIcon";

import squarespace from "./img/squarespace-logo.png";
import react from "./img/react-logo.png";
import HtmlIcon from "./img/HtmlIcon";
import JavascriptIcon from "./img/JavascriptIcon";
import GitIcon from "./img/GitIcon";
import BootstrapIcon from "./img/BootstrapIcon";
import PhpIcon from "./img/PhpIcon";
import WordpressIcon from "./img/WordpressIcon";
import MysqlIcon from "./img/MysqlIcon";
import VueIcon from "./img/VueIcon";
import CssIcon from "./img/CssIcon";
import AngularIcon from "./img/AngularIcon";

const RecentWork = (props) => {
  return (
    <section className='section-wrap'>
      <div className='recent-work'>
        <h2>Recent Work</h2>
        <div className='work-01'>
          <hr />
          <h3>
            <a href='http://lisaforsenatedistrict12.com/' target='blank'>
              lisaforsenatedistrict12.com
            </a>
            - 20.04.06
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
        <div className='work-02'>
          <hr />
          <h3>
            <a href='https://elizabethwellsphotography.com' target='blank'>
              elizabethwellsphotography.com
            </a>{" "}
            - 20.02.05
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
        <div className='work-03'>
          <hr />
          <h3>
            <a href='#'>scott-wells.com</a> - 20.05.31
          </h3>
          <p>
            Of course I have to include this portfolio site. I designed this
            portfolio in React, wtih custom styles and Sass. Heavily inspired by
            these people:{" "}
            <a href='https://adamthedev.com/' target='blank'>
              Adam The Dev
            </a>
            ,{" "}
            <a href='https://www.taniarascia.com/' target='blank'>
              Tania Rascia
            </a>
            ,{" "}
            <a href='https://christophermurphy.dev/' target='blank'>
              Christopher Murphy
            </a>
            , and{" "}
            <a href='https://www.aaronmoreno.co/' target='blank'>
              Aaron Moreno
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
        <div className='work-04'>
          <hr />
          <h3>
            <a href='https://sandyrauschnmsenate.com/' target='blank'>
              sandyrauschnmsenate.com
            </a>
            - 20.05.19
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

export default RecentWork;
