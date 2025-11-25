import { FaShoppingCart } from "react-icons/fa"
import { Badge } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { cartQuantity = () => 0, cart = [] } = useContext(CartContext) || {}
    return (
        <Link to='/cart' className="cartWidgetLink">
        <FaShoppingCart fontSize={'1.3rem'}/>
        {cart.length > 0 && <Badge pill bg="white" text="dark">{cartQuantity()}</Badge>}
        </Link>
    )
}

export default CartWidget