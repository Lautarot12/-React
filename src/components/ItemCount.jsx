import React from "react"
import { useState } from "react"

const ItemCount = ({stock}) => {

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

    return (
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount