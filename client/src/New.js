import { useState } from "react";
import CryptidForm from "./CryptidForm";
import LocationForm from "./LocationForm";

function New() {

    const [showCryptidForm, setShowCryptidForm] = useState(false)
    const [showLocationForm, setShowLocationForm] = useState(false)

    function handleShowCryptidForm() {
        setShowCryptidForm(true)
        setShowLocationForm(false)
    }

    function handleShowLocationForm() {
        setShowLocationForm(true)
        setShowCryptidForm(false)
    }

    return (
        <>
            {showCryptidForm ? (
                <CryptidForm />
            ) : (
                <button onClick={handleShowCryptidForm}>
                    Submit Cryptid
                </button>
            )}
            <h3>OR</h3>
            {showLocationForm ? (
                <LocationForm />
            ) : (
                <button onClick={handleShowLocationForm}>
                    Submit Location
                </button>
            )}

        </>
    )
}

export default New;