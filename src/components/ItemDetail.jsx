import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({detalle}) => {
    const {cart, addItem} = useContext(CartContext)

    const [purchase, setPurchase] = useState(false)

    const onAdd = (cantidad) => {
        console.log(cantidad)
        setPurchase(true)
        addItem(detalle,cantidad)
    }
    return (
        <div>
            <h1>{detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
            {purchase ? <Link className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount onAdd={onAdd} stock={detalle.stock}/>}
        </div>
    )
}

export default ItemDetail