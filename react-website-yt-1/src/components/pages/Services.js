import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Services() {
    return <>
        <div>
            <h1 className='acervo'>Acervo digital gratuito do projeto:</h1>
        </div>
            <h1  className='acervo_container'>
            <Link
              to='/'
              class='social-icon-link drive'>Biblioteca Virtual
              <i class="fa-brands fa-google-drive"></i>
            </Link>
            </h1>
    </>
    
}
