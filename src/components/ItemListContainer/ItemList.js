import React, { useState } from 'react';

// incluir una promise
//agrupa componenetes de item.js
//promise llama a un objeto asincronico que devuelve datos: id, title, etc

const ItemList = ( {items}) => {
  const [items, setItems] = useState();

    return (
        <div>
      {items.map((items) => {
        return (
          <div key={items.id}>
            <Item data={items} />
          </div>)
      })}
              {items}

        </div>
    );
};

export default ItemList;