import React from "react";
import { Link } from "react-router-dom";
import "../styles/Item.css";

const Item = ({product}) => {
  return (
    <div className="itemCard">
      <div className="itemImageWrapper">
        <img src={product.img} alt={product.name} className="itemImage" />
      </div>

      <div className="itemInfo">
        <h3 className="itemTitle">{product.name}</h3>
        <p className="itemPrice">$ {product.price}</p>

        <Link to={`/item/${product.id}`} className="itemButton">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
