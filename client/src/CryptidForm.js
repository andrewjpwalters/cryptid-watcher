import { useState, useContext } from "react";
import { useHistory } from "react-router";
import ReactMarkdown from "react-markdown";
import { UserContext } from "./context/user";
import { Card } from "react-bootstrap";
import Error from "./Error";

function CryptidForm() {
    const { user } = useContext(UserContext)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
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
            if (r.ok) {
                history.push("/cryptids");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div className="mt-4">
            <h2>Submit Cryptid</h2>
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
                    <div className="col-auto">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            rows="5"
                            className="form-select mb-1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="url">Image URL</label>
                        <input
                            type="text"
                            id="url"
                            className="form-control mb-1"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="col-auto mt-2">
                        <input className="btn btn-outline-dark" type="submit" value="Submit" />
                    </div>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </div>
            </form>
            <div className="mt-4">
                <h3>Preview</h3>
                <Card className="text-center my-2 p-2" style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={url} />
                        <Card.Title>{name}</Card.Title>
                        <ReactMarkdown>{description}</ReactMarkdown>
                        <Card.Text className="fst-italic">Submitted by {user.username}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default CryptidForm