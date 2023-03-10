import { useContext } from "react"
import { Badge, Button } from "react-bootstrap"
import { CartCheckFill } from "react-bootstrap-icons"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext)
    const noOfItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return <Button 
            variant="outline-dark" 
            className="d-flex align-items-center rounded-pill px-4"
            onClick={() => cartContext.setShowCart(true)}>
        <span className="mb-1 mx-1"><CartCheckFill /></span>
        <span className="mx-1">Your Order</span>
        <span>
            <Badge pill bg="dark px-2 py-1 mx-1 rounded">{noOfItems}</Badge>
        </span>
    </Button>
}

export default HeaderCartButton