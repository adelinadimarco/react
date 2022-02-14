
import React, { useState } from 'react';
// contador de articulos
const ItemCounter = ({ stock, initial}) => {
    const [counter, setCounter] = useState(0);

    // let onChange = (event) => {
    //     let inputValue = event.target.value;
    //     this.setState({inputValue});
    //   }

    console.log(counter);
    // funciones contador de mas y menos
    const handlerCounterUp = () => {

        setCounter(counter + 1);
    };
    const handlerCounterDown = () => {
        if (this.state.counter > 0){
        setCounter(counter - 1);}
    };
    return (
        <div>
            <p>{counter}</p>
            {/* <input onChange= {onChange}/> */}
            <button onClick={handlerCounterUp}>Más</button>
            <button onClick={handlerCounterDown}>Menos</button>
        </div>
        )
}

export default ItemCounter;