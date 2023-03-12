import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import styles from "./SignUp.module.css"

const SignUp = (props) => {

    const [validated, setValidated] = useState(false)
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(event.target.checkValidity() === false) {
            event.stopPropagation()
        } else {
            console.log("Signup form Submitted")
        }

        setValidated(true)
    }

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>
                            <small>Name</small>
                        </Form.Label>
                        <Form.Control 
                            className={styles.inputField + " shadow-none"} 
                            type="text"
                            value={name}
                            onChange={nameChangeHandler}
                            required
                            pattern="[a-zA-Z]{3,}"
                            />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpEmail">
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

                    <Form.Group className="mb-3" controlId="signUpPassword">
                        <Form.Label>
                            <small>Password</small>
                        </Form.Label>
                        <Form.Control 
                            className={styles.inputField + " shadow-none"} 
                            type="password"
                            value={password}
                            onChange={passwordChangeHandler}
                            required
                            pattern="[a-zA-Z0-9!@#$%^&*]{6,16}$"
                            />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid password
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpPasswordConfirm">
                        <Form.Label>
                            <small>Confirm Password</small>
                        </Form.Label>
                        <Form.Control 
                            className={styles.inputField + " shadow-none"} 
                            type="password"
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                            required
                            />
                        <Form.Control.Feedback type="invalid">
                            Confirm password not matching
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Check type="checkbox" className="d-flex justify-content-center mt-4 mb-3">
                        <Form.Check.Input 
                            variant="dark" 
                            className="shadow-none" 
                            type="checkbox"
                            required
                            />
                        <Form.Check.Label>
                            <small className="text-secondary mx-2">
                                I have read and agree to <a href="/">Terms & Conditions</a>
                            </small>
                        </Form.Check.Label>
                    </Form.Check>
                    
                    <div className="d-grid gap-2">
                        <Button variant="dark" 
                            type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default SignUp