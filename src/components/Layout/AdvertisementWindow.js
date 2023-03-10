import { Row, Col, Image } from "react-bootstrap"
import foodImg from "../../assets/img/home-bg.png"
import styles from "./AdvertisementWindow.module.css"

const AdvertisementWindow = (props) => {
    return <Row>
        <Col md={12} className="p-0">
            <Image className={styles.foodImage} fluid src={foodImg} />
        </Col>
    </Row>
}

export default AdvertisementWindow