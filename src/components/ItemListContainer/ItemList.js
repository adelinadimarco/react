import React from 'react';

// incluir una promise
//agrupa componenetes de item.js
//promise llama a un objeto asincronico que devuelve datos: id, title, etc

const ItemList = ( {items}) => {
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
ItemList.defaultProps = {
   items: '2022 todos los derechos reservados.'
};

export default ItemList;