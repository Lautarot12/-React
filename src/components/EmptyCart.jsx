import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div>
            <h1>Tu carrito esta vacio.</h1>
            <h3>Te invitamos a ver nuestros productos</h3>
            <Link className='btn btn-danger' to={'/'}>Ir a productos</Link>
        </div>
    )

}

export default EmptyCart