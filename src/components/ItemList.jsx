import React from "react";
import Item from "./Item";
import "../styles/ItemList.css";

const ItemList = ({data}) => {
  return (
    <div className="catalogContainer">
      {data.map(product => (
        <Item
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ItemList;
