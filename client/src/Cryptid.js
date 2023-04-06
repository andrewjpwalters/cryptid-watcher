import React from "react"
import Location from "./Location"
import { Card } from "react-bootstrap";

function Cryptid({ name, img_url, description, user, locations }) {

    const filteredLocations = locations.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.name === current.name)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return (
        <Card className="text-center my-2 p-2" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={img_url} alt={name} />
            <Card.Body>
                <Card.Title className="my-3">{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="fst-italic">Submitted by {user}</Card.Text>
                <Card.Text className="text-decoration-underline">Known Locations:</Card.Text>
                {filteredLocations.map((location) => (
                    <Location
                        key={location.id}
                        name={location.name}
                    />
                ))}
            </Card.Body>
        </Card>
    )
}

export default Cryptid