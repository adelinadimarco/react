import React from 'react'

import './card.css'

//'reactstrap';

const CardPerfume = ({ brand, name, image, description, price }) => {
  return (
    <div className='perfume'>
        <h3>{name}</h3>
        <h4>{brand}</h4>
        <img src={image} alt='foto' className='fotoSize' />    
        <p>{description}</p>
        <h5>${price}</h5>
        <button>COMPRAR</button>
        <input type="hidden" value="5000" />
    </div>
  );
};

export default CardPerfume;
