import { FaShoppingCart } from "react-icons/fa"
import { Badge } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const CartWidget = () => {
    const { cartQuantity = () => 0, cart = [] } = useContext(CartContext) || {}
    return (
        <>
        <FaShoppingCart fontSize={'1.3rem'}/>
        {cart.length > 0 && <Badge pill bg="white" text="dark">{cartQuantity()}</Badge>}
        </>
    )
}

export default CartWidget