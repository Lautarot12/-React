import React, { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import "../styles/CartView.css"

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext)

  return (
    <div className="pageSection cartContainer">
      <h1>Tu carrito</h1>

      <div className="cartList">
        {cart.map((item) => (
          <div className="cartItem" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="cartInfo">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Total: ${item.quantity * item.price}</p>
            </div>
            <button
              className="removeBtn"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <h2 className="totalText">Total a pagar ${total()}</h2>

      <div className="cartActions">
        <button className="clearBtn" onClick={clear}>
          Vaciar carrito
        </button>
        <Link className="checkoutBtn" to="/checkout">
          Terminar compra
        </Link>
      </div>
    </div>
  )
}

export default CartView
