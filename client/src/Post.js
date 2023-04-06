import { useState } from "react";
import EditingPostForm from "./EditingPostForm";

function Post({
    id,
    comment,
    user,
    cryptid,
    cryptids,
    location,
    locations,
    onPostDelete,
    onUpdatePost
}) {

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
        <div>
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
                    <h3>{cryptid.name}</h3>
                    <h4>{location.name}</h4>
                    <p>{comment}</p>
                </>
            )}
            <p>Submitted by {user}</p>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit Sighting</button>
            <button onClick={handleDeletePost}>Delete Sighting</button>
        </div>

    )
}

export default Post;