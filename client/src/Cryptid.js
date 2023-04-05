import React from "react"
import Location from "./Location"

function Cryptid({ name, img_url, description, user, locations }) {

    const filteredLocations = locations.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.name === current.name)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return (
        <div>
            <p>{name}</p>
            <img src={img_url} alt="" />
            <p>{description}</p>
            <p>Submitted by {user}</p>
            <p>Known Locations:</p>
            <ul>
                {filteredLocations.map((location) => (
                    <Location
                        key={location.id}
                        name={location.name}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Cryptid