import React, { useState, useEffect,  } from "react";
import ItemList from "./itemList.js";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
     //funcion para pasar callback -> fetch
     // useEffect(callback)
    useEffect(() => {
        const promiseProducts = new Promise( resolve => {
            console.log(products)
            setProducts(
            setTimeout(() =>
                resolve(products), 2000))
        });

    return (
        <div>
            <ItemList products={products}></ItemList>
        </div>
    )   });
};

export default ItemListContainer;