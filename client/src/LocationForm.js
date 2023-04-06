import { useState } from "react";
import { useHistory } from "react-router";
import Error from "./Error";

function LocationForm() {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name
            }),
        }).then((r) => {
            if (r.ok) {
                history.push("/posts");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div className="mt-4">
            <h2>Submit Location</h2>
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
                <div className="form-group gap-2">
                    <div className="col-auto">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control mb-1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <input className="btn btn-outline-dark mt-2" type="submit" value="Submit" />
                </div>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </form>
        </div>
    );
}

export default LocationForm