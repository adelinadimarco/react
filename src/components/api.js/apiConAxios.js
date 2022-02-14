import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import NASA from './mostrarApi';
//React.useEsffect
//React.useCallback
//hay muchos hooks de React
const Hello = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    //siempre que llamamos una api emulamos un componentDidMount con useEffect
    // useEffect((peticion async) => {}, [] )
    // [] para que se ejecute solo luego del 1er render
    useEffect(() => {
        // con axios podemos solucionar la peticion asincrona en una sola promise
        // con fetch hay que parciar la data
        axios(
            'https://api.nasa.gov/techport/api/specification?api_key=DEMO_KEY'
        ).then((res) => setData(res.data));//respuesta siempre dentro de data
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        // return -> renderiza
        // conditional rendering < ternary operator
        return (<div>
            { <NASA data={data} ></NASA>}
        </div>)
    }, []);

};

export default Hello;