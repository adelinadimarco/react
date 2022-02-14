import React from 'react';
// mostrar los datos del producto
// como si fuera una card de contenido
const Item = ({product}) => {
    return (
 <div>
     <h4>{}</h4>
     <h5>{}</h5>
     <img src={} alt={}></img>
     <p>{}</p>
     <p>{}</p>
 </div>
    ) // card para array de jsonplaceholder
};

export default Item;