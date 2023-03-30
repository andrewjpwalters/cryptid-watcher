import { useState } from "react";
import { useHistory } from "react-router";
import Error from "./Error";

function PostForm() {
    const [cryptid, setCryptid] = useState(0)
    const [location, setLocation] = useState(0)
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cryptid_id,
                location_id,
                comment
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/post");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <>
            <h2>Submit Sighting</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cryptid">Cryptid</label>
                <select />
                <label htmlFor="location">Location</label>
                <select />
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