import Item from './item.js'
// ItemList para mapear los perfumes(productos)
const ItemList = ({ products }) => {
    return (<div>        
        {products.map((products) => {
            return (
                <div key={products.id}>
                <Item  products={products} />
                </div>
            )
        })}   
    </div>)
};  // usar herramienta key para que react reconozca el mapeo

export default ItemList;