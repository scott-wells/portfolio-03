import React from "react";

const Contact = () => {
  return (
    <section className='section-wrap'>
      <div className='contact'>
        <h2 id='04'>Contact Links</h2>
        <div className='contact-links'>
          <a
            href='mailto:contact@scott-wells.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fas fa-envelope'></i>
          </a>
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
          <a
            href='https://www.linkedin.com/in/scott-wells-1a3119161/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
