import { Col, Row } from "react-bootstrap"
import { HeartFill } from "react-bootstrap-icons"
import styles from "./Footer.module.css"

const Footer = (props) => {
    return <Row className={styles.footer + " mt-4 pt-2 shadow-sm"}>
        <Col md={12}>
            <p className="text-secondary text-center">
                Made with 
                <span className="text-danger px-1"><HeartFill /></span>
                by Rahul
            </p>
        </Col>
    </Row>
}

export default Footer