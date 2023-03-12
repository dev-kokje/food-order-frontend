import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import styles from "./ResetPassword.module.css"

const ResetPassword = (props) => {

    const [validated, setValidated] = useState(false)

    const [email, setEmail] = useState("")

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(event.target.checkValidity() === false) {
            event.stopPropagation()
        } else {
            console.log("Reset password form Submitted")
        }

        setValidated(true)
    }

    return <Container>
        <Row>
            <Col md={12}>
                <h4 className="text-center">Forgot password</h4>
                <p className="text-secondary text-center my-2">
                    <small>Enter your email to get the reset password link</small>
                </p>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center">
            <Col md={10}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="resetPasswordEmail">
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

                    <div className="d-grid gap-2 mt-4">
                        <Button variant="dark" type="submit">
                            Send reset password link
                        </Button>
                    </div>

                </Form>
            </Col>
        </Row>
    </Container>
}

export default ResetPassword