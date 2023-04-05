import React from "react"

function Cryptid({ name, img_url, description, user, locations }) {

    return (
        <div>
            <p>{name}</p>
            <img src={img_url} alt="" />
            <p>{description}</p>
            <p>Submitted by {user}</p>
            <p>Known Locations:</p>
            <ul>
                {/* {locations.map((location) => (
                    <li>{location.name}</li>
                ))} */}
            </ul>
        </div>
    )
}

export default Cryptid