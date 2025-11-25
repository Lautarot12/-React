import React, { useState, useContext } from "react";
import "../styles/ItemDetail.css";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
    const { addItem } = useContext(CartContext);
    const [purchase, setPurchase] = useState(false);

    const onAdd = (cantidad) => {
        setPurchase(true);
        addItem(detalle, cantidad);
    };

    return (
        <div className="detailWrapper">

            <div className="detailImageWrapper">
                <img src={detalle.img} alt={detalle.name} className="detailImage" />
            </div>

            <div className="detailInfo">
                <h1 className="detailName">{detalle.name}</h1>

                <p className="detailDescription">{detalle.description}</p>

                <div className="detailPrice">${detalle.price}</div>

                <div className="detailActions">
                    {purchase ? (
                        <Link to="/cart" className="finishButton">
                            Terminar compra
                        </Link>
                    ) : (
                        <ItemCount stock={detalle.stock} onAdd={onAdd} />
                    )}
                </div>
            </div>

        </div>
    );
};

export default ItemDetail;
