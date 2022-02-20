import React from 'react';
import ItemCounter from './counter/ItemCounter'

// detalles del producto

const ItemDetail = ({ data }) => {
    
    onAdd() => {
        <ItemCounter />
    }

  return (
    <div className='perumeDetail'>
        <h3>{data.id}</h3>
        <h4>{data.name}</h4>
        <img src={data.image} alt='foto' className='fotoSize' />    
        <p>{data.occupation}</p>
        <h5>$ {data.nickname}</h5>
        <button>COMPRAR</button>
        <div>
            <ItemCounter />
        </div>
        <input type="hidden" value="5000" />

    </div>
  )
  };

  export default ItemDetail;