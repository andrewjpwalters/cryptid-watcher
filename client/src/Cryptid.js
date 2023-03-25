import React from "react"

function Cryptid({ name, img_url, description, user }) {

    return (
        <div>
            <p>{name}</p>
            <img src={img_url} alt="" />
            <p>{description}</p>
            <p>Submitted by {user}</p>
        </div>
    )
}

export default Cryptid