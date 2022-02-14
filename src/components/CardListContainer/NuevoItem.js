import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardPerfume from 'Z:/CODER/adelina-react/src/components/CardComponent/Card';

const NuevoItem = () => {
  let [product, setProduct] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);
  console.log(product);

  //useEffect(callback)
  useEffect(() => {
    axios('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'
    ).then((res) => setProduct(res.data));

  }, []);

  //   //funcion para pasar callback -> fetch
  //     fetch('https://jsonplaceholder.typicode.com/photos')
  //       .then((response) => response.json())
  //       .then(json => setProduct(json));
  //     console.log(NuevoItem);
  //   }, []);
  //   // [] si nombro variable se ejecuta solo cuando esta se actualiza
  // // si ejecutas esa variable funciona como componentDidUpdate

  return (
    // map es una función que ordena arrays
    <div>

      {/* { product.map((perfume) => { 
          return (
          <div key={perfume.id}>  */}
      <CardPerfume data={product} />
      {/* </div> ) */}
    </div>
  )
};

export default NuevoItem;