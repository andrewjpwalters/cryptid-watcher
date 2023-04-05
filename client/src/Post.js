function Post({ id, comment, user, cryptid, location, onPostDelete }) {

    function handleDeletePost() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id)
    }

    return (
        <div>
            <h3>{cryptid}</h3>
            <h4>{location}</h4>
            <p>{comment}</p>
            <p>Submitted by {user}</p>
            <button onClick={handleDeletePost}>Delete Post</button>
        </div>

    )
}

export default Post;