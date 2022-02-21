import React from 'react';
import Item from './Item';
// incluir una promise
//agrupa componenetes de item.js
//promise llama a un objeto asincronico que devuelve datos: id, title, etc

const ItemList = ( {items}) => {

    return (
        <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Item data={item} />
          </div>)
      })}

        </div>
    );
};

export default ItemList;