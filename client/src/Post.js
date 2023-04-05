function Post({ comment, user, cryptid, location }) {
    return (
        <div>
            <h3>{cryptid}</h3>
            <h4>{location}</h4>
            <p>{comment}</p>
            <p>Submitted by {user}</p>
        </div>

    )
}

export default Post;