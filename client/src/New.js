import { useState } from "react";
import CryptidForm from "./CryptidForm";
import LocationForm from "./LocationForm";

function New({ onAddCryptid, onAddLocation }) {

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
                <CryptidForm onAddCryptid={onAddCryptid} />
            ) : (
                <button
                    onClick={handleShowCryptidForm}
                    className="text-center btn btn-outline-dark mt-4"
                >
                    Submit Cryptid
                </button>
            )}
            <h4 className="my-4">OR</h4>
            {showLocationForm ? (
                <LocationForm onAddLocation={onAddLocation} />
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