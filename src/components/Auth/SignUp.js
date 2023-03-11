import { Button, Col, Container, Form, Row } from "react-bootstrap"
import styles from "./SignUp.module.css"

const SignUp = (props) => {
    return <Container>
        <Row>
            <Col md={12}>
                <h4 className="text-center">Sign up with Food Order App</h4>
                <p className="text-secondary text-center my-2">
                    <small>One account to manage all your orders.</small>
                </p>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center">
            <Col md={10} className="my-2">
                <Form>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <small>Name</small>
                        </Form.Label>
                        <Form.Control className={styles.inputField + " shadow-none"} type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <small>Email or Phone</small>
                        </Form.Label>
                        <Form.Control className={styles.inputField + " shadow-none"} type="text"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            <small>Password</small>
                        </Form.Label>
                        <Form.Control className={styles.inputField + " shadow-none"} type="password"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            <small>Confirm Password</small>
                        </Form.Label>
                        <Form.Control className={styles.inputField + " shadow-none"} type="password"/>
                    </Form.Group>
                    
                    <Form.Check type="checkbox" className="d-flex justify-content-center mt-4 mb-3">
                        <Form.Check.Input className="shadow-none" type="checkbox" />
                        <Form.Check.Label>
                            <small className="text-secondary mx-2">
                                I Have read and agree to <a href="/">Terms & Conditions</a>
                            </small>
                        </Form.Check.Label>
                    </Form.Check>
                    
                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default SignUp