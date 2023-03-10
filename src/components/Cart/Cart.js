import { useContext } from "react"
import { Button, Col, Container, Modal, Row, Image } from "react-bootstrap"
import CartContext from "../../store/cart-context"
import styles from "./Cart.module.css"
import CartItem from "./CartItem/CartItem"
import emptyCartImg from "../../assets/img/empty-cart.png"

const Cart = (props) => {

    const cartContext = useContext(CartContext)

    const totalAmount = cartContext.totalAmount.toFixed(2)
    const hasItems = cartContext.items.length > 0

    return <Modal 
                show={cartContext.showCart} 
                onHide={() => cartContext.setShowCart(false)}
                size="lg"
                centered
                >
        <Modal.Header closeButton>
            <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                cartContext.items.length > 0 ?
                <Container>
                    <Row>
                        <Col md={12}>
                            {
                                cartContext.items.map((item) => <CartItem key={item.id} item={item} context={cartContext} />)
                            }
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={12} className="d-flex justify-content-between">
                            <span className={styles.totalAmountText}>Total Amount:</span>
                            <span className={styles.totalAmountText}>${totalAmount}</span>
                        </Col>
                    </Row>
                </Container>
                :
                <Container>
                    <Row>
                        <Col md={12} className="d-flex row justify-content-center">
                            <Image
                                className={styles.emptyCartImg} 
                                src={emptyCartImg}
                            ></Image>
                            <h6 className="text-center text-secondary mt-2">Oops ! Looks like you have no items in your Cart...</h6>
                        </Col>
                    </Row>
                </Container>
            }
            <Container className="pt-4">
            
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button className="px-3" variant="outline-danger" onClick={() => cartContext.setShowCart(false)}>
                Cancel
            </Button>
            <Button disabled={!hasItems} className="px-4" variant="outline-dark">
                Proceed to Checkout
            </Button>
        </Modal.Footer>
    </Modal>
}

export default Cart