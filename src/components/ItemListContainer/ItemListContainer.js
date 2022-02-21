// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);

  //useEffect(callback)
  useEffect(() => {

    //funcion para pasar callback -> fetch
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then(json => setProducts(json));

  }, []);
  // [] si nombro variable se ejecuta solo cuando esta se actualiza
  // si ejecutas esa variable funciona como componentDidUpdate

  return (
    <div>
      <ItemList items={products}/>
    </div>
  )
}

export default ItemListContainer;