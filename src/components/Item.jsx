import React from "react";
import "../styles/Item.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Item = ({ product }) => {
    return (
        <motion.div 
        className="itemCard"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}>
            <div className="itemImageWrapper">
                <img
                    src={product.img}
                    alt={product.name}
                    className="itemImage"
                    loading="lazy"
                />
            </div>

            <div className="itemInfo">
                <h3 className="itemName">{product.name}</h3>
                <p className="itemDescription">{product.description}</p>

                <div className="itemBottom">
                    <span className="itemPrice">${product.price}</span>
                    <Link to={`/item/${product.id}`} className="itemButton">Ver detalle</Link>

                </div>
            </div>
        </motion.div>
    );
};

export default Item;
