import React from "react";
import Item from './Item'
import "../styles/ItemList.css";

const ItemList = ({data}) => {
    return (
        <div className="catalogWrapper">
            <h2 className="catalogTitle">Catálogo</h2>

            <div className="catalogGrid">
                {data.map(product => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
