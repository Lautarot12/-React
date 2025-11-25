import React, { useState } from "react";
import "../styles/ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="countWrapper">

            <div className="countControls">
                <button className="countBtn" onClick={restar}>-</button>

                <span className="countNumber">{cantidad}</span>

                <button className="countBtn" onClick={sumar}>+</button>
            </div>

            <button className="addToCartBtn" onClick={() => onAdd(cantidad)}>
                Agregar al carrito
            </button>

        </div>
    );
};

export default ItemCount;