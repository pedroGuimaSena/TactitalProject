import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
              DA DISCIPLINA
              <i class='fa-solid fa-gopuram' />
              </Link>
            </div>
            <small class='website-rights'>DA DISCIPLINA © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'>
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://github.com/pedroGuimaSena'
              target='_blank'
              aria-label='LinkedIn'>
              <i class="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>    
  );
}

export default Footer;