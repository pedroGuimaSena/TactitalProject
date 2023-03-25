import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out</h1>
      <div className='cards_container'/>
      <div className='cards_wrapper'/>
      <ul className='cards_items'>
        <Carditem
         src="images/seneca.jpg" 
         text="Sobre a Tranquilidade da Alma"
         label='Sêneca'
         path='/services' 
        />

        <Carditem
         src="images/artdaguerra.jpg" 
         text="Vencer antes de lutar"
         label='Sun Tzu'
         path='/services' 
        />
      </ul>
    </div>
  )
}

export default Cards
