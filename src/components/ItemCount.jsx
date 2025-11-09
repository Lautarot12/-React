import React from "react"
import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
        if (count >= stock) {
            setCount(count)
    }}

    const restar = ()=> {
        setCount (count - 1)
        if (count <= 0) {
            setCount (0)
        }
    }

    const ejecutarCompra = () => {
        onAdd(count)
    }

    return (
        <>
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
        <button className="btn btn-primary" onClick={ejecutarCompra} disabled= {count === 0 || stock === 0}>Comprar</button>
        </>
    )
}

export default ItemCount