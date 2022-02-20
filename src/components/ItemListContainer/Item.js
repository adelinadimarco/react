import React from 'react';
import './card.css';

// detalles del producto

const Item = ({ data }) => {
  return (
    <div className='tarjeta'>
      <div className='perfume'>
        <h3>{data.char_id}</h3>
        <h4>{data.name}</h4>
        <img src={data.img} alt='foto' className='fotoSize' />    
        <p>{data.occupation}</p>
        <h5>$ {data.nickname}</h5>
        <button>COMPRAR</button>
        <input type="hidden" value="5000" />
        </div>
    </div>
  )
  }

export default Item;