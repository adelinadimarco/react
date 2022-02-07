import Item from '/components/ItemList'
// ItemList para mapear los perfumes(productos)
const ItemList = ({ products }) => {
    return (<div>
        {    // usar erramienta key para que react reconozca el mapeo
            products.map((parfume) => (
                <Item key={parfume.id} parfume={parfume}></Item>
            )) // se puede cambiar el nombre de product x perfume o lo que sea puntual
        };
    </div>);
};

export default ItemList;