import { useState } from "react";
import OptionList from "./OptionList.js";
import Error from "./Error";

function PostForm({ cryptids, locations }) {
    const [cryptidId, setCryptidId] = useState("")
    const [locationId, setLocationId] = useState("")
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cryptid_id: cryptidId,
                location_id: locationId,
                comment
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                setCryptidId("")
                setLocationId("")
                setComment("")
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    const cryptidData = cryptids.map((crytpidObj) => {
        return <OptionList
            key={crytpidObj.id}
            id={crytpidObj.id}
            name={crytpidObj.name}
        />
    })

    const locationData = locations.map((locationObj) => {
        return <OptionList
            key={locationObj.id}
            id={locationObj.id}
            name={locationObj.name}
        />
    })

    return (
        <>
            <h2>Submit Sighting</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cryptid_id">Cryptid</label>
                <select
                    id="cryptid_id"
                    value={cryptidId}
                    onChange={(e) => setCryptidId(e.target.value)}
                >
                    <option value="null">Choose a Cryptid</option>
                    {cryptidData}
                </select>
                <label htmlFor="location_id">Location</label>
                <select
                    id="location_id"
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                >
                    <option value="null">Choose a Location</option>
                    {locationData}
                </select>
                <label htmlFor="comment">Comment</label>
                <input
                    type="text"
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">
                    {isLoading ? "Loading..." : "Submit Sighting"}
                </button>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </form>
        </>
    );
}

export default PostForm