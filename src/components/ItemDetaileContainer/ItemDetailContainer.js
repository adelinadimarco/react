import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'

const getItem = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('ItemDetail')
            .then((response) => response.json())
            .then(json => setProduct(json));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
}

function ItemDetailContainer() {

} 