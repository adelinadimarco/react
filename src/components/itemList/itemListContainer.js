import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ItemList from "./itemList.js";
import perfumes from './productos.js'


const ItemListContainer = ({ hola }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promiseProducts = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(perfumes)
            }, 2000)
        });

        promiseProducts
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            <h3>{hola}</h3>
            <ItemList products={products}></ItemList>
        </div>
    )
};
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    //     // .then((json) => console.log(json));
    //     .then((json) => setTodos(json))
    //     .catch((error)=>{
    //         console.log(error)
    //     });
export default ItemListContainer;