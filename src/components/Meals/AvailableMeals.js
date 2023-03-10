import { Card, Col, Row } from "react-bootstrap"
import MealItem from "./MealItem/MealItem"

const MEALS_LIST = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      }
]

const AvailableMeals = (props) => {

    const mealsList = MEALS_LIST.map(meal => <MealItem key={meal.id} item={meal} />)

    return <Row className="d-flex justify-content-center mt-4">
        <Col md={6}>
            <Card border="light" className="p-4 pb-0 shadow-sm">
                {mealsList}
            </Card>
        </Col>
    </Row>
}

export default AvailableMeals