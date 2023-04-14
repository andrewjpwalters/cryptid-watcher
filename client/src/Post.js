import { useState } from "react";
import EditingPostForm from "./EditingPostForm";
import { Card, Button } from "react-bootstrap";
import Error from "./Error";

function Post({
    id,
    comment,
    postUser,
    cryptid,
    cryptidsEditForm,
    location,
    locationsEditForm,
    onPostDelete,
    onUpdatePost
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [errors, setErrors] = useState([])

    function handleDeletePost() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        })
            .then(r => {
                if (r.ok) {
                    onPostDelete(id)
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            })
    }

    function handleUpdatePost(updatedPost) {
        setIsEditing(false);
        onUpdatePost(updatedPost)
    }

    return (
        <Card className="my-2 p-2" style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title className="mb-3">{cryptid.name}</Card.Title>
                <Card.Subtitle className='mb-4'>Location: {location.name}</Card.Subtitle>
                <Card.Text className="mb-4">{comment}</Card.Text>
                <Card.Text className="fst-italic">Submitted by {postUser.username}</Card.Text>
                {isEditing ? (
                    <EditingPostForm
                        id={id}
                        comment={comment}
                        cryptidsEditForm={cryptidsEditForm}
                        locationsEditForm={locationsEditForm}
                        cryptidId={cryptid.id}
                        locationId={location.id}
                        onUpdatePost={handleUpdatePost}
                    />
                ) : (
                    <>
                    </>
                )}
                <Button variant="outline-dark" onClick={() => setIsEditing((isEditing) => !isEditing)}>
                    {isEditing ? ("Cancel Edit") : ("Edit Sighting")}
                </Button>
                <Button className="mx-2" variant="danger" onClick={handleDeletePost}>Delete Sighting</Button>
            </Card.Body>
            {errors || [].map((err) => (
                <Error key={err}>{err}</Error>
            ))}
        </Card>

    )
}

export default Post;