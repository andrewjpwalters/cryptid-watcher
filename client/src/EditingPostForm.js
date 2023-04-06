import { useState } from "react";
import Error from "./Error";
import OptionList from "./OptionList";

function EditingPostForm({ id, comment, cryptid, cryptids, location, locations, onUpdatePost }) {
    const [cryptidId, setCryptidId] = useState(cryptid)
    const [locationId, setLocationId] = useState(location)
    const [userComment, setUserComment] = useState(comment);
    const [errors, setErrors] = useState([]);

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
            if (r.ok) {
                r.json().then((updatedPost) => onUpdatePost(updatedPost))
            } else {
                r.json().then((err) => setErrors(err.error));
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
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
                <div className="form-group gap-2">
                    <div className="col-auto">
                        <label htmlFor="cryptid_id">Cryptid</label>
                        <select
                            id="cryptid_id"
                            className="form-select mb-1"
                            defaultValue={cryptidId}
                            value={cryptidId}
                            onChange={(e) => setCryptidId(e.target.value)}
                        >
                            <option value="null">No Change</option>
                            {cryptidData}
                        </select>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="location_id">Location</label>
                        <select
                            id="location_id"
                            className="form-select mb-1"
                            defaultValue={locationId}
                            value={locationId}
                            onChange={(e) => setLocationId(e.target.value)}
                        >
                            <option value="null">No Change</option>
                            {locationData}
                        </select>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="comment">Comment</label>
                        <input
                            type="text"
                            id="comment"
                            className="form-control mb-1"
                            value={userComment}
                            onChange={(e) => setUserComment(e.target.value)}
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

export default EditingPostForm