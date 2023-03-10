import { useContext, useEffect, useState } from "react"
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap"
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons"
import CartContext from "../../../store/cart-context"
import styles from "./MealItem.module.css"


const MealItem = (props) => {

    const [amount, setAmount] = useState(0)
    const cartContext = useContext(CartContext)

    const updateAmount = (action) => {
        if(action === 'plus' && amount < 5) {
            cartContext.addItem({...props.item, amount: amount+1})
        } else if(action === 'minus' && amount > 0) {
            cartContext.removeItem(props.item.id)
            setAmount(amount-1)
        }
    }

    useEffect(() => {
        const existingComponentIndex = cartContext.items.findIndex(item => item.id === props.item.id)
        const existingItem = cartContext.items[existingComponentIndex]

        if(existingItem) {
            setAmount(existingItem.amount)
        } else {
            setAmount(0)
        }
    }, [cartContext.items, props.item])

    return <Row className="my-1 py-2 border-bottom">
        <Col md={9} className="px-5">
            <p className={styles.itemName}>{props.item.name}</p>
            <p className={styles.itemDescription}>{props.item.description}</p>
            <p className={styles.itemPrice}>${props.item.price}</p>
        </Col>
        <Col md={3}>
            <ButtonGroup>
                <Button 
                    variant="outline-dark" 
                    onClick={() => updateAmount('minus')}
                    >
                        <DashCircleFill />
                </Button>
                <Form.Control 
                    readOnly 
                    type="number" 
                    min={0} 
                    max={5} 
                    className={styles.itemCount} 
                    value={amount} />
                <Button 
                    variant="outline-dark" 
                    onClick={() => updateAmount('plus')}
                    >
                        <PlusCircleFill />
                </Button>
            </ButtonGroup>
        </Col>
    </Row>
}

export default MealItem