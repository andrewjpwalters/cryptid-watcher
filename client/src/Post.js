import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import EditingPostForm from "./EditingPostForm";
import { Card, Button } from "react-bootstrap";

function Post({
    id,
    comment,
    postUser,
    cryptid,
    cryptids,
    location,
    locations,
    onPostDelete,
    onUpdatePost
}) {
    const { user } = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)

    function handleDeletePost() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id)
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
                        cryptids={cryptids}
                        locations={locations}
                        cryptidId={cryptid.id}
                        locationId={location.id}
                        onUpdatePost={handleUpdatePost}
                    />
                ) : (
                    <>
                    </>
                )}
                {user.id === postUser.id ? (
                    <>
                        <Button variant="outline-dark" onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            {isEditing ? ("Cancel Edit") : ("Edit Sighting")}
                        </Button>
                        <Button className="mx-2" variant="danger" onClick={handleDeletePost}>Delete Sighting</Button>
                    </>
                ) : (
                    <></>
                )}
            </Card.Body>
        </Card>

    )
}

export default Post;