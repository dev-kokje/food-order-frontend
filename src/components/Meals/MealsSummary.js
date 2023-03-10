import { Col, Row } from "react-bootstrap"
import styles from "./MealsSummary.module.css"

const MealsSummary = (props) => {

    const mainWindowStyle = styles.mealsSummary + " d-flex justify-content-center"

    return <Row className={mainWindowStyle}>
        <Col md={5} className={styles.mealsSummaryWindow}>
            <h2 className="font-weight-bold mt-2 mb-4">Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p className="mb-2">
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </Col>
    </Row>
}

export default MealsSummary