import React, { useState, useEffect } from "react";
import ItemList from "./itemList.js";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
     //funcion para pasar callback -> fetch
     // useEffect(callback)
    useEffect(() => {
        const promiseProducts = new Promise((resolve, reject)=>{
            console.log(products)
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        });

        promiseProducts
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error)
            })
    });

    return (
        <div>
            <h3>{}</h3>
            <ItemList products={products}></ItemList>
        </div>
    )
};

export default ItemListContainer;