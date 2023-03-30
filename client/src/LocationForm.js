import { useState } from "react";
import { useHistory } from "react-router";
import Error from "./Error";

function LocationForm() {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/posts");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <>
            <h2>Submit Location</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">
                    {isLoading ? "Loading..." : "Submit Location"}
                </button>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </form>
        </>
    );
}

export default LocationForm