import { useState } from "react";
import OptionList from "./OptionList.js";
import Error from "./Error";

function PostForm({ cryptids, locations, onAddPost }) {
    const [cryptidId, setCryptidId] = useState("")
    const [locationId, setLocationId] = useState("")
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
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
            if (r.ok) {
                setCryptidId("")
                setLocationId("")
                setComment("")
                r.json().then((newPost) => onAddPost(newPost))
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
        <div className="mt-4">
            <h2>Submit Sighting</h2>
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
                <div className="form-group gap-2">
                    <div className="col-auto">
                        <label htmlFor="cryptid_id">Cryptid</label>
                        <select
                            id="cryptid_id"
                            className="form-select mb-1"
                            value={cryptidId}
                            onChange={(e) => setCryptidId(e.target.value)}
                        >
                            <option value="null">Choose a Cryptid</option>
                            {cryptidData}
                        </select>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="location_id">Location</label>
                        <select
                            id="location_id"
                            className="form-select mb-1"
                            value={locationId}
                            onChange={(e) => setLocationId(e.target.value)}
                        >
                            <option value="null">Choose a Location</option>
                            {locationData}
                        </select>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            type="text"
                            rows="5"
                            id="comment"
                            className="form-control mb-1"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <input className="btn btn-outline-dark" type="submit" value="Submit" />
                    </div>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default PostForm