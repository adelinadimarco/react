import React from 'react';
// mostrar los datos del producto
// como si fuera una card de contenido
const Item = ((products)=> {
    return (
 <div>
     <h4>{products.name}</h4>
     <h5>{products.brand}</h5>
     <img src={products.imgUrl} alt={products.imgUrl}></img>
     <p>{products.description}</p>
     <p>{products.price}</p>
 </div>
    );
});

export default Item;