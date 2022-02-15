import React from 'react';
import ItemCounter from '../CardListContainer/Counter/ItemCount';
import './card.css';

//'reactstrap';

const CardPerfume = ({ data }) => {
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
        <div >
          <ItemCounter initial='1' stock='10' />
        </div>
        </div>
    </div>
  )
  }

export default CardPerfume;
