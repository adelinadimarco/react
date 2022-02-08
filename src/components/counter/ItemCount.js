
import React, { useState } from 'react';
// contador de articulos
const ItemCounter = () => {
    const [counter, setCounter] = useState(0);
    //const [stock, setStock] = useState(20);
    console.log(counter);
    // funciones contador de mas y menos
    const handlerCounterUp = () => {
        setCounter(counter + 1);
    };
    const handlerCounterDown = () => {
        setCounter(counter - 1);
    };
    return (
        <div>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>Más</button>
            <button onClick={handlerCounterDown}>Menos</button>
        </div>
        )
};

export default ItemCounter;