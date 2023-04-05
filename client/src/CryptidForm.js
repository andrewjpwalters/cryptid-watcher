import { useState } from "react";
import { useHistory } from "react-router";
import ReactMarkdown from "react-markdown";
import Error from "./Error";

function CryptidForm({ user }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/cryptids", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                description,
                image_url: url,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/cryptids");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <>
            <h2>Submit Cryptid</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="url">Image URL</label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">
                    {isLoading ? "Loading..." : "Submit Cryptid"}
                </button>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </form>
            <div>
                <h3>Preview</h3>
                <h4>{name}</h4>
                <img src={url} alt="" />
                <ReactMarkdown>{description}</ReactMarkdown>
                <cite>Submitted by {user.username}</cite>
            </div>
        </>
    );
}

export default CryptidForm