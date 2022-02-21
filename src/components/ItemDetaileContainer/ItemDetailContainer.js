import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const  [product, setProduct] = useState(true);

    useEffect(() => {

        fetch('https://www.breakingbadapi.com/api/characters')
          .then((response) => response.json())
          .then(json => setProduct(json[1]));
    
      }, []);

      return (
          <div>
             <ItemDetail data={product}/> 
          </div>
      )
}

export default ItemDetailContainer;