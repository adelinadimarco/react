import React from 'react';
// productos principales
const Item = ({ data }) => {

  return (
    <div className='tarjeta'>

        <img src={data.image} alt='foto' className='fotoSize' />    
        <p>{data.id}</p>
        <h3>{data.name}</h3>
        <h4>{data.brand}</h4>
        <h5>$ {data.price}</h5>
        <button>COMPRAR</button>
        <input type="hidden" value="5000" />
 
    </div>
  )
  }

export default Item;