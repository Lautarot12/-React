import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({detalle}) => {
    return (
        <div>
            <h1>{detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
            <ItemCount stock={detalle.stock}/>
        </div>
    )
}

export default ItemDetail;