function Post({ id, comment, user, cryptid, cryptids, location, locations, onPostDelete }) {

    // pass down cryptid and location id a level above, maybe? Then extract names 
    // down here with ids for editing form

    function handleDeletePost() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id)
    }

    return (
        <div>
            <h3>{cryptid.name}</h3>
            <h4>{location.name}</h4>
            <p>{comment}</p>
            <p>Submitted by {user}</p>
            <button onClick={handleDeletePost}>Delete Post</button>
        </div>

    )
}

export default Post;