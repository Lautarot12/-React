import React from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const ItemDetail = ({detalle}) => {
    const {cart, addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log(cantidad)
        addItem(detalle, cantidad)
    }
    return (
        <div>
            <h1>{detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
            <ItemCount onAdd={onAdd} stock={detalle.stock}/>
        </div>
    )
}

export default ItemDetail