import React from 'react';

const ItemDetail = ({detalle}) => {
    return (
        <div>
            <h1>{detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
        </div>
    )
}

export default ItemDetail;