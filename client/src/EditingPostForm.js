import { useState } from "react";
import Error from "./Error";
import OptionList from "./OptionList";

function EditingPostForm({ id, comment, cryptid, cryptids, location, locations, onUpdatePost }) {
    const [cryptidId, setCryptidId] = useState(cryptid)
    const [locationId, setLocationId] = useState(location)
    const [userComment, setUserComment] = useState(comment);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cryptid_id: cryptidId,
                location_id: locationId,
                comment: userComment
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((updatedPost) => onUpdatePost(updatedPost))
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
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                />
                <button type="submit">
                    {isLoading ? "Loading..." : "Update Sighting"}
                </button>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </form>
        </>
    );

}

export default EditingPostForm