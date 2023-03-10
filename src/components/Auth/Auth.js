import { useContext } from "react"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import AuthContext from "../../store/auth-context"
import styles from "./Auth.module.css"

const Auth = (props) => {

    const authContext = useContext(AuthContext)

    return <Modal 
                show={authContext.showAuth} 
                onHide={authContext.setShowAuth}
                centered
                >
        <Modal.Header className={styles.modalHeader} closeButton />
        <Modal.Body>
            <Container>
                <Row>
                    <Col md={12}>
                        <h4>Sign up with Food Order App</h4>
                        <h6 className="text-secondary my-2">
                            Already have an account? 
                            <Button variant="link" className={styles.linkBtn + " text-primary"}>
                                Sign in
                            </Button>
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h6>
                            Or just wait till my next commit. I am still working on this functionality.
                        </h6>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
}

export default Auth