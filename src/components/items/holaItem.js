import React, { useEffect, useState } from 'react';
import Item from './item';

const NuevoItem = () => {
    let [product, setProduct] = useState([]);

    useEffect(() => {
        //funcion para pasar callback -> fetch
//      // useEffect(callback)
     fetch('http://jsonplaceholder.typicode.com/posts')
     .then(x => x.json())
     .then(json => console.log(json));
        console.log(NuevoItem);
    });
  return (
    <div><Item /></div>
  );
};

export default NuevoItem;