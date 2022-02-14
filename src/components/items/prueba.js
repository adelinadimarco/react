// import React, { useState, useEffect,  } from "react";
// import ItemList from "./itemList.js";

// // class ItemListContainer extends React.Component {
// //     render(){}
// // promis: api en forma de objeto que recibe valores x parametro
// const ItemListContainer = () => {
//     const [products, setProducts] = useState([]);
//      //funcion para pasar callback -> fetch
//      // useEffect(callback)
//      fetch('http://jsonplaceholder.typicode.com/posts')
//      .then(x => x.json())
//      .then(json => console.log(json))
//     useEffect(() => {
//         let promiseProducts = new Promise( resolve => {
//             console.log(products)
//             .then ((res) =>setProducts);
//             setTimeout(() =>
//                 resolve(products), 2000)
//         });

//     return (
//         <div>
//             <ItemList products={products}></ItemList>
//         </div>
//     )   });
//  };
// promiseProducts.then ((message) => console.log('hola puta' + message)).catch(())
// export default ItemListContainer;