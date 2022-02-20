import React from 'react';
import ItemCounter from './counter/ItemCounter'

// detalles del producto

const ItemDetail = ({ data }) => {
  return (
    <div className='tarjeta'>
        <h3>{data.char_id}</h3>
        <h4>{data.name}</h4>
        <img src={data.img} alt='foto' className='fotoSize' />    
        <p>{data.occupation}</p>
        <h5>$ {data.nickname}</h5>
        <button>COMPRAR</button>
        <div>
            <ItemCounter />
        </div>
        <input type="hidden" value="5000" />

    </div>
  )
  }

export default ItemDetail;

function ItemDetail ({ item }) {
    onAdd(1) {
        <ItemCounter />
    }
    return (
        <div>

        </div>
    )
}