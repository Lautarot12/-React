import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const CartView = () => {
    const {cart, removeItem, clear}=useContext(CartContext)
    return (
        <div>
            <h1>Tu carrito</h1>
            <div>
                {
                    cart.map((compra)=> (
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding: '2rem'}} key={compra.id}>
                            <img src={compra.img} alt={compra.name} style={{width: '9rem'}}/>
                            <span className='text-capitalize'>{compra.name}</span>
                            <span>${compra.price}</span>
                            <span>Cantidad: {compra.quantity}</span>
                            <span>Precio final: ${compra.quantity * compra.price}</span>
                            <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>Eliminar producto</button>
                        </div>
                    ))
                }
                <span>Total a pagar: $</span>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding: '2rem'}}>
                    <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                    <button className='btn btn-success'>Terminar compra</button>
                </div>

            </div>
        </div>
    )

}

export default CartView