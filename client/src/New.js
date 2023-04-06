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
                <button
                    onClick={handleShowCryptidForm}
                    className="text-center btn btn-outline-dark mb-1"
                >
                    Submit Cryptid
                </button>
            )}
            <h3>OR</h3>
            {showLocationForm ? (
                <LocationForm />
            ) : (
                <button
                    onClick={handleShowLocationForm}
                    className="text-center btn btn-outline-dark mb-1"
                >
                    Submit Location
                </button>
            )}

        </>
    )
}

export default New;