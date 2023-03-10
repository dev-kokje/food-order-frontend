import { Container } from "react-bootstrap"
import AdvertisementWindow from "../components/Layout/AdvertisementWindow"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import AvailableMeals from "../components/Meals/AvailableMeals"
import MealsSummary from "../components/Meals/MealsSummary"
import CartProvider from "../store/CartProvider"

const Home = (props) => {
    return <CartProvider>
        <Header />
        <Container fluid>
            <AdvertisementWindow />
            <MealsSummary />
            <AvailableMeals />
            <Footer />
        </Container>
    </CartProvider>
}

export default Home