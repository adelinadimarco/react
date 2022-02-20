// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardPerfume from 'Z:/CODER/adelina-react/src/components/CardComponent/Card';

const ItemListContainer = () => {
  let [product, setProduct] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);
  console.log(product);

  //useEffect(callback)
  useEffect(() => {

    //funcion para pasar callback -> fetch
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then(json => setProduct(json));
    console.log(NuevoItem);
  }, []);
  // [] si nombro variable se ejecuta solo cuando esta se actualiza
  // si ejecutas esa variable funciona como componentDidUpdate

  return (
    <div>
      {product.map((product) => {
        return (
          <div key={product.id}>
            <CardPerfume data={product} />
          </div>)
      })}
    </div>
  )
}

export default ItemListContainer;