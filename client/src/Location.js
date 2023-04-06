import { Card } from "react-bootstrap"

function Location({ name, id }) {
    return (
        <Card.Text className="fw-light" value={id}>{name}</Card.Text>
    )
}

export default Location