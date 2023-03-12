import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import styles from "./SignIn.module.css"

const SignIn = (props) => {

    const [validated, setValidated] = useState(false)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHander = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(event.target.checkValidity() === false) {
            event.stopPropagation()
        } else {
            console.log("Signin form Submitted")
        }

        setValidated(true)
    }

    return <Container>
        <Row>
            <Col md={12}>
                <h4 className="text-center">Sign in with Food Order App</h4>
                <p className="text-secondary text-center my-2">
                    <small>Welcome Back! Login now to place your orders.</small>
                </p>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center">
            <Col md={10} className="my-2">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="signInEmail">
                        <Form.Label>
                            <small>Email or Phone</small>
                        </Form.Label>
                        <Form.Control 
                            className={styles.inputField + " shadow-none"} 
                            type="text"
                            value={email}
                            onChange={emailChangeHandler}
                            required
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signInPassword">
                        <Form.Label>
                            <small>Password</small>
                        </Form.Label>
                        <Form.Control 
                            className={styles.inputField + " shadow-none"} 
                            type="password"
                            value={password}
                            onChange={passwordChangeHander}
                            required
                            pattern="[a-zA-Z0-9!@#$%^&*]{6,16}$"
                            />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid password
                        </Form.Control.Feedback>
                        <Form.Text>
                            <Button variant="link" className="p-0 m-0 text-muted">
                                <small>Forgot password?</small>
                            </Button>
                        </Form.Text>
                    </Form.Group>

                    <div className="d-grid gap-2 mt-4">
                        <Button variant="dark" type="submit">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default SignIn