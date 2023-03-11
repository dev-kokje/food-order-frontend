import { useContext } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Dash, Plus, Trash, X } from "react-bootstrap-icons"
import CartContext from "../../../store/cart-context"
import styles from "./CartItem.module.css"

const CartItem = (props) => {

    const cartContext = useContext(CartContext)

    const updateItem = (action) => {
        if(action === 'ADD') {
            cartContext.addItem(props.item)
        } else if(action === 'REMOVE') {
            cartContext.removeItem(props.item.id)
        }
    }

    return <Row className="mb-4">
        <Col xs={7} md={5}>
            <h5>
                <span>{props.item.name}</span>
            </h5>
            <Row className={styles.itemPrice}>
                <Col>
                    ${props.item.price.toFixed(2)}
                    <span className="d-md-none"> <X /> {props.item.amount} = ${props.item.itemTotalPrice.toFixed(2)} </span>
                </Col>
            </Row>
        </Col>
        <Col md={1} className="d-none d-md-flex flex-row align-items-center">
            <X/>
        </Col>
        <Col xs={5} md={3} className="d-flex flex-row align-items-center"> 
            <Button 
                size="sm" 
                variant="outline-secondary" 
                className="rounded-circle" 
                onClick={() => updateItem('REMOVE')}>
                    {
                        props.item.amount === 1 ? <Trash/> : <Dash />
                    }
            </Button>
            <Form.Control 
                readOnly
                type="number"
                value={props.item.amount}
                className={styles.itemCount + " mx-2"}
                />
            <Button 
                size="sm" 
                variant="outline-secondary" 
                className="rounded-circle"
                onClick={() => updateItem('ADD')}
                >
                    <Plus/>
            </Button>
        </Col>
        <Col md={1} className="d-none d-md-flex flex-row align-items-center">
            =
        </Col>
        <Col md={2} className="d-none d-md-flex justify-content-end align-items-center">
            <span className={styles.itemTotalPrice}>${props.item.itemTotalPrice.toFixed(2)}</span>
        </Col>
    </Row>
}

export default CartItem