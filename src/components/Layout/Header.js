import { Button, Container, Navbar } from "react-bootstrap"
import HeaderCartButton from "./HeaderCartButton"
import styles from "./Header.module.css"
import { useContext } from "react"
import Cart from "../Cart/Cart"
import AuthContext from "../../store/auth-context"
import CartContext from "../../store/cart-context"

const Header = (props) => {

    const cartContext = useContext(CartContext)
    const authContext = useContext(AuthContext)

    return <Navbar bg="light" variant="light" className={styles.myNavbar}>
        <Container>
            <Navbar.Brand href="#home">Food Order App</Navbar.Brand>
            <Navbar.Toggle />
            <div className="d-flex flex-row">
                {
                    cartContext.showCartButton ? 
                        <HeaderCartButton className={"justify-content-end"} />
                        :
                        <Button variant="outline-dark" className="rounded-pill px-4" onClick={authContext.setShowAuth}>Sign up</Button>
                }
            </div>
            <Cart />
        </Container>
    </Navbar>    
}

export default Header